const {
  response
} = require('express')
const cours = require('../model/cours')
const section = require('../model/section')

//show List of Section
const index = (req, res, next) => {
  section.find()
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
//insert  Section

const insert = (req, res, next) => {
  console.log(req.body)
  let s = new section({

    titreSection: req.body.titreSection,
    typeParent: req.body.typeParent,
    idParent: req.body.idParent

  })

  console.log(s);
  s.save()
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
  index,
  insert

}