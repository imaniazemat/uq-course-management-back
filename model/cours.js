const { mongoose, SchemaTypes} = require('mongoose');
const Schema = mongoose.Schema;

const Utilisateur = require('../model/utilisateur');
const Categorie = require('../model/categorie');


const coursSchema = new Schema({

  code: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prixNormal: {
    type: Number,
    required: true
  },
  dateAjoute: {
    type: String,
    required: true
  },
  estPaye: {
    type: Boolean,
    required: true
  },
  idUtilisateur: {
    type: SchemaTypes.ObjectId,
    ref: Utilisateur,
    required: true,

  },
  idCategorie: {
    type: SchemaTypes.ObjectId,
    ref: Categorie,
    required: true
  }

})
const cours = mongoose.model('Cours', coursSchema, 'Cours')
module.exports = cours