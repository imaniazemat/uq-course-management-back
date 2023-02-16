const {
  response
} = require('express')
const {
  mongoose,
  mongo
} = require('mongoose')

const inscription = require('../model/inscription')
const cours = require('../model/cours');


//insert  

const insert = (req, res, next) => {
  console.log(req.body)
  let inscriptionCour = new inscription({


    idEtudiant: req.body.idEtudiant,
    idCours: req.body.idCours,
    dateInscription: req.body.dateInscription

  })

  console.log(inscriptionCour);
  inscriptionCour.save()
    .then(response => {
      res.json({

        message: 'inscription cour  Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'inscription cour  error Occured!===>' + error
      })
    })
}

const listDeCours = (req, res, next) => {
  
  inscription.aggregate([
      {
        $match: { idEtudiant: new mongoose.Types.ObjectId('63ed184f0e3ab12c9b964446') }
      },
      {
        $lookup: {
          from: "Cours",
          localField: "idCours",
          foreignField: "_id",
          as: "cours"
        }
      },

      {
        $unwind: '$cours'
      },
      {
        $group: {
          _id: '$idEtudiant',
          courses: {
            $push: {
              name: '$cours.nom',
              code: '$cours.code'
            }
          }
        }
      }
    ])
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
module.exports = {
  insert,
  listDeCours
}