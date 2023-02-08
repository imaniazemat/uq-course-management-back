const categorie = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    
    description: String,
})