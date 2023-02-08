const express = require("express");
const coursSchema = require("../models/cours");
const gestionMateriel = require("../models/gestionMateriel");
const section = require("../models/section");

const router = express.Router();

//Create cours
router.post('/createCours', (req, res) => {
    const cours = coursSchema(req.body);
    cours
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//Liste de cours
router.get('/listeDuCours', (req, res) => {
    coursSchema
        .aggregate(
            [
                {
                    $lookup:
                    {
                        from: "categories",
                        localField: "idCategorie",
                        foreignField: "_id",
                        as: "nomCategorie"
                    }
                },
                //{ $match: { "nomCategorie.nom": "Informatiqe" }} //pour trouve juste cels qui sont d'informatique
            ]
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

})

//Liste Materiels du cours
router.get('/listeMaterielsDuCours', (req, res) => {
    coursSchema
        .aggregate(
            [
                {
                    $lookup:
                    {
                        from: "gestionmateriels",
                        localField: "_id",
                        foreignField: "idCours",
                        as: "Materiels"
                    }
                },
                { $match: { code:"L001" }}
            ]
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Liste Cours avec Section et Materiels
router.get('/listeCoursMS', (req, res) => {
    coursSchema
        .aggregate([
            {
                $lookup:
                {
                    from: "gestionmateriels",
                    localField: "_id",
                    foreignField: "idParentSection",
                    as: "Materiels"
                }
            },
            /* { $match: { code:"L001" }}, */
            {
                $lookup: {
                    from: "sections",
                    as: "Sections",
                    let: { idCours: "$_id" }, // _id is from Cours
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $eq: [ "$idParent","$$idCours" ] //idParent is from sections
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            $lookup: {
                                from: "sections",
                                as: "SousSections",
                                let: { typeSection: "Section" }, //Type de Section
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    {
                                                        $eq: [ "$typeParent", "$$typeSection" ] //idParentSections is from gestionmateriels table
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: "gestionmateriels",
                                            as: "Materiels",
                                            let: { idSection: "$_id" }, //_id is from Sections
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: {
                                                            $and: [
                                                                {
                                                                    $eq: [ "$idParentSection", "$$idSection" ] //idParentSections is from gestionmateriels table
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ])
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router;