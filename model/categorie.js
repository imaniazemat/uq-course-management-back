const { mongoose, SchemaTypes} = require('mongoose');
const Schema = mongoose.Schema;

const categorieSchema = new Schema({

  nom: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }


})
const categorie = mongoose.model('Categorie', categorieSchema, 'Categorie')
module.exports = categorie