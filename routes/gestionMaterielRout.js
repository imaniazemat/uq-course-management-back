const express = require('express')
const router = express.Router()

const gestionController = require('../controllers/gestionMaterialController')
const gestionMaterial = require('../model/gestionMaterial')

router.get('/', gestionController.index)

router.get('/listDeCoursDematerial', gestionController.listDeCoursDeMaterial)
router.get('/listDeCoursDemateriall', gestionController.listDeCoursDeMateriall)

//router.get('/show/:produitId', ProduitController.show)

router.post('/insert', gestionController.insert)

//router.put('/update/:produitId', ProduitController.update)

//router.delete('/delete/:coursID', ProduitController.destroy)

module.exports = router