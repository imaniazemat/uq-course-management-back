const {  mongoose,SchemaTypes} = require('mongoose');
const Schema = mongoose.Schema;
const Cours = require("../model/cours");
const Etudiant = require("../model/etudiant");


const inscriptionSchema = new Schema({

     idEtudiant: {
          type: SchemaTypes.ObjectId,
          ref: Etudiant,
          required: true
     },
     idCours: {
          type: SchemaTypes.ObjectId,
          ref: Cours,
          required: true
     },
     dateInscription: {
          type: String
     }

})

const inscription = mongoose.model('Inscription', inscriptionSchema, 'Inscription')
module.exports = inscription