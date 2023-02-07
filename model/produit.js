                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const produitSchema = new Schema({

     description: {
          type: String
     },
     image: {
          type: String
     },
     prix: {
          type: Number
     },
     details: {
          type: String
     }
})

const produit = mongoose.model('Produit', produitSchema, 'Produit')
module.exports = produit