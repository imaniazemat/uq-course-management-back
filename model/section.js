const {
     mongoose,
     SchemaTypes
} = require('mongoose');
const Schema = mongoose.Schema;

const Cours = require('../model/cours');
const sectionSchema = new Schema({

     titreSection: {
          type: String,
          required: true
     },
     idParent: {
          type: SchemaTypes.ObjectId,
          ref: Cours,
          required: true
     },
     typeParent: {
          type: String,
          required: true
     }
})

const section = mongoose.model('Section', sectionSchema, 'Section')
module.exports = section