const express = require('express')
const router = express.Router()

const sectionController = require('../controllers/sectionController')

router.get('/', sectionController.index)

//router.get('/listDeCours', coursController.listDeCours)

//router.get('/show/:produitId', ProduitController.show)

router.post('/insert', sectionController.insert) 

//router.put('/update/:produitId', ProduitController.update)

//router.delete('/delete/:coursID', ProduitController.destroy)

module.exports = router