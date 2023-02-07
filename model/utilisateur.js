const { mongoose, SchemaTypes} = require('mongoose');
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({

  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  courriel: {
    type: String,
    required: true
  },

  moteDePasse: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  }

})
const utilisateur = mongoose.model('Utilisateur', utilisateurSchema, 'Utilisateur')
module.exports = utilisateur