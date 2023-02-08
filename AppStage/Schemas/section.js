const section = mongoose.Schema({
    titreSection: {
        type: String,
        required: true
    },
    idParent: {
        type: String,
        required: true
    },
    typeParent: {
        type: String,
        required: true
    }
})