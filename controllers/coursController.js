const {
  response
} = require('express')
const cours = require('../model/cours')

//show List of Produits

const index = (req, res, next) => {
  cours.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {

      res.json({
        Message: 'An error Occured!'
      })
    })
}

//list de cours
const listDeCours=(req,res,next)=>{
  cours.aggregate(
    [
    {
      $lookup:
      {
        from:"Categorie",
        localField:"idCategorie",
        foreignField:"_id",
        as:"cat"

      }
    }
  ]
  )
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {

    res.json({
      Message: 'An error Occured!'+ error
    })
  })
}
//insert  produit

const insert = (req, res, next) => {
  console.log(req.body)
  let cou = new cours({

    idCours: req.body.idCours,
    description: req.body.description,
    nom: req.body.nom,
    code: req.body.code,
    prixNormal: req.body.prixNormal,
    dateAjoute: req.body.dateAjoute,
    estPaye: req.body.estPaye,
    idUtilisateur: req.body.idUtilisateur,
    idCategorie: req.body.idCategorie

  })

  console.log(cou);
  cou.save()
    .then(response => {
      res.json({

        message: 'cours Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error Occured!===>' + error
      })
    })
}
module.exports = {
  insert
}

//delete cours



module.exports = {
  index,
  insert,listDeCours
}