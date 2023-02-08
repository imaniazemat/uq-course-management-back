const infoPaiement = mongoose.Schema({
    montant: {
        type: Number,
        required: true
    },
    datePaiement: {
        type: Date,
        required: true
    },
    numTransaction: {
        type: String,
        required: true
    },
    etatTransaction: {
        type: Boolean,
        required: true
    }
})