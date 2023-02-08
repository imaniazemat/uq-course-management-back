const cours = mongoose.Schema({
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
        default: 0
    },

    dateAjoute: {
        type: Date,
        required: true
    },
    estPaye: {
        type: Boolean,
        required: true
    },

    idProfesseur: {
        type: String,
        default: "0"
    },

    idCategorie: {
        type: String,
        required: true
    }
})