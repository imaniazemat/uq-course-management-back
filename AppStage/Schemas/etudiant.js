const etudiant = mongoose.Schema({  //Pareil pour Professeur et Admin
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