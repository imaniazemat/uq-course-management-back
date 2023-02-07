const {
     mongoose,
     SchemaTypes
} = require('mongoose');
const Schema = mongoose.Schema;

const Cours = require('../model/cours');
const Section = require('../model/section');
const gestionMaterialSchema = new Schema({

     typeMaterial: {
          type: String
     },
     Description: {
          type: String
     },
     dateAjoute: {
          type: String
     },
     idCours: {
          type: SchemaTypes.ObjectId,
          ref: Cours,
          required: true,
     },
     lien: {
          type: String
     },
     idParentSection: {
          type: SchemaTypes.ObjectId,
          ref: Section,

     },
     typeParent: {
          type: String
     }

})

const gestionMaterial = mongoose.model('GestionMaterial', gestionMaterialSchema, 'GestionMaterial')
module.exports = gestionMaterial