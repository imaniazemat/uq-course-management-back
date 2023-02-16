

const { mongoose, SchemaTypes} = require('mongoose');
const Schema = mongoose.Schema;
const etudiantSchema = new Schema({

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
    motDePasse: {
        type: String,
        required: true
    }
})
const etudiant = mongoose.model('Etudiant', etudiantSchema, 'Etudiant')
module.exports = etudiant

