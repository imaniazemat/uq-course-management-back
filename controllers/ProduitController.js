

const { response} = require('express')
const produit = require('../model/produit')

//show List of Produits

const index = (req, res, next) => {
  produit.find()
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

//show single produit
const show = (req, res, next) => {
  let produitID = req.params.produitId
  produit.findById(produitID)
    .then(response => {

      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An error Occured!'
      })

    })
}
//insert  produit
const store = (req, res, next) => {
  console.log(req.body)
  let p = new produit({

    description: req.body.description,
    image: req.body.image,
    prix: req.body.prix,
    details: req.body.details

  })

  p.save()
    .then(response => {
      res.json({

        message: 'produit Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error Occured!'
      })
    })
}

//update an produit

const update = (req, res, next) => {

  let produitID = req.params.produitId
  let updatedate = {
    description: req.body.description,
    image: req.body.image,
    prix: req.body.prix,
    details: req.body.details

  }

  produit.findByIdAndUpdate(produitID, {
      $set: updatedate
    })
    .then(() => {

      res.json({
        message: 'Produit Update successfully'
      })
    })
    .catch(error => {

      res.json({
        message: 'An error Occured!'
      })
    })

}
//delete produit

const destroy = (req, res, next) => {

  console.log(req.body)
  let produitID = req.params.produitId
  produit.findByIdAndRemove(produitID)
    .then(() => {
      req.json({
        message: 'Produit delete successfully'
      })

    })
    .catch(error => {
      req.json({
        message: 'An error Occures!'
      })
    })
}
module.exports = {
  index,
  show,
  update,
  destroy,
  store
}