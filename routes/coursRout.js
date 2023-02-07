const express = require('express')
const router = express.Router()

const coursController = require('../controllers/coursController')

router.get('/', coursController.index)

router.get('/listDeCours', coursController.listDeCours)

router.post('/insert', coursController.insert) 

module.exports = router