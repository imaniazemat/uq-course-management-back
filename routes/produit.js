const express = require('express')
const router = express.Router()

const coursController = require('../controllers/coursController')

router.get('/', ProduitController.index)

router.get('/show/:produitId', ProduitController.show)

router.post('/store', ProduitController.store)

router.put('/update/:produitId', ProduitController.update)

router.delete('/delete/:produitId', ProduitController.destroy)

module.exports = router