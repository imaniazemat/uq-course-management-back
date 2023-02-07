const Schema = mongoose.Schema;
const inscriptionSchema = new Schema({

     idEtudiant: {
          type: String
     },
     idCour: {
          type: String
     },
     dateInscription: {
          type: String
     }
})

const inscription = mongoose.model('Inscription', inscriptionSchema, 'Inscription')
module.exports = inscription