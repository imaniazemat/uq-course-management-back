const inscription = mongoose.Schema({
    idEtudiant: {
        type: String,
        required: true
    },
    idCours: {
        type: String,
        required: true
    },
    dateInscription: {
        type: Date,
        required: true
    },
})