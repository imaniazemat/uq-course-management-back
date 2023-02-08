const rabais = mongoose.Schema({
    idCours: {
        type: String,
        required: true
    },
    dateDebut: {
        type: Date,
        required: true
    },
    dateFin: {
        type: Date,
        required: true
    },

    porcentageRabais: Number,

    montantRabais: Number
})

//Comment on peut faire valider porcentage ou montant?
//Vu que ça va être un ou l'autre