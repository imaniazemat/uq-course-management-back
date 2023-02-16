const express = require("express");
const mangoose = require("mongoose");
const dbUrl = "mongodb+srv://AzematImani:4GJcRSGEYRgYt5NQ@cluster0.vo36nyt.mongodb.net/UniversitQuebec?retryWrites=true&w=majority"
const bodyParser = require('body-parser')
const CoursRoute = require('./routes/coursRout')
const GestionRoute = require('./routes/gestionMaterielRout')
const SectionRoute = require('./routes/sectionRoute')
const InscriptionRoute = require('./routes/inscriptionRout')
const connectionPrams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mangoose.connect(dbUrl, connectionPrams).then(() => {

    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });
const app = express();
const port = 3000;
//app.get("/", function (request, response) {
// response.send("bonjour tout le monde<br/>utilisation du serveur Express")


//});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.listen(3000);
app.use('/api/cours', CoursRoute)
app.use('/api/gestion', GestionRoute)
app.use('/api/section', SectionRoute)
app.use('/api/inscription', InscriptionRoute)