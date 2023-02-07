const Schema = mongoose.Schema;
const infoPaiementSchema = new Schema({

     montant: {
          type: Number
     },
     datePaiement: {
          type: String
     },
     numTransc: {
          type: Number
     },
     etatTransc: {
          type: Boolean
     }
})

const infoPaiement = mongoose.model('InfoPaiement', infoPaiementSchema, 'InfoPaiement')
module.exports = infoPaiement