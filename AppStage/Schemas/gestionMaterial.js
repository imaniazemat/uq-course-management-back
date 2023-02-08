const gestionMaterial = mongoose.Schema({
    typeMaterial: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateAjoute: {
        type: Date,
        required: true
    },
    idCours: {
        type: String,
        required: true
    },
    lien: {
        type: String,
        required: true
    },
    idParentSection: {
        type: String,
        required: true
    },
    typeParent: {
        type: String,
        required: true
    }
})