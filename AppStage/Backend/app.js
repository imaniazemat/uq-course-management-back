const express = require("express");
const mongoose = require('mongoose');

//Routes
const categorieRoutes = require("./src/routes/categorie")
const coursRoutes = require("./src/routes/cours")
const sectionRoutes = require("./src/routes/section")
const gestionMaterielRoutes = require("./src/routes/gestionMateriel")

const app = express();

//Lien pour la conection a la BD Atlas
const URI = "mongodb+srv://testUser:testUser@cluster0.bhn0oza.mongodb.net/MyServiceWeb?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(categorieRoutes);
app.use(coursRoutes);
app.use(sectionRoutes);
app.use(gestionMaterielRoutes);

//Connection to DB Atlas
mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

//Path main
app.get('/', (req, res) => {
    res.send("Welcome to the Service Web")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})