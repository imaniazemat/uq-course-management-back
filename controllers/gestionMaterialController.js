const {
  response
} = require('express')
const gestionmaterial = require('../model/gestionMaterial')
const cours = require('../model/cours')
const gestionMaterial = require('../model/gestionMaterial')
const section = require('../model/section')

//show List of Produits

const index = (req, res, next) => {
  gestionmaterial.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {

      res.json({
        Message: 'An error Occured!' + error
      })
    })
}
///version2222222
//list de materiel
const listDeCoursDeMateriall = (req, res, next) => {
  cours.aggregate(
      [{
        $lookup: {
          from: "Section",
          let: {
            idCours: "$_id"
          }, //id is of table course
          as: "sections",
          pipeline: [{
              $match: {
                $expr: {
                  $and: [{
                      $eq: ["$idParent", "$$idCours"]
                    } //id is of table gestionmaterial
                  ]
                }
              }
            },
            {
              $lookup: {
                from: "GestionMaterial",
                as: "materials",
                let: {
                  idSection: "$_id"
                },
                pipeline: [{
                  $match: {
                    $expr: {
                      $and: [{
                          $eq: ["$idParentSection", "$$idSection"]
                        },
                        {
                          $eq: ["$idCours", "$$idCours"]
                        },
                        {
                          $eq: ["$typeParent", "Section"]
                        }
                      ]
                    }
                  }
                }]
              }
            }
          ]
        }
      }]
    )
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {

      res.json({
        Message: 'An error Occured!' + error
      })
    })
}
//list de materiel
const listDeCoursDeMaterial = (req, res, next) => {
  cours.aggregate(
      [{
        $lookup: {
          from: "GestionMaterial",
          localField: "_id",
          foreignField: "idCours",
          as: "Materials"

        }
      }]
    )
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {

      res.json({
        Message: 'An error Occured!' + error
      })
    })
}

//insert  Material

const insert = (req, res, next) => {
  console.log(req.body)
  let material = new gestionMaterial({

    typematerial: req.body.typematerial,
    description: req.body.description,
    dateAjoute: req.body.dateAjoute,
    idCours: req.body.idCours,
    lien: req.body.lien,
    idParentsection: req.body.idParentsection,
    typeParent: req.body.typeParent


  })

  console.log(material);
  material.save()
    .then(response => {
      res.json({

        message: 'material Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error Occured!===>' + error
      })
    })
}

module.exports = {
  index,
  listDeCoursDeMaterial,
  listDeCoursDeMateriall,
  insert

}