const mongoose =require('mongoose')
const Schema=mongoose.Schema;

const rabaisSchema=new Schema({

  idCours:{
    type:String,
    required:true}
  ,
  prdateDebut:{
    type:String,
    required:true
  },
  dateFin:{
    type:String,
    required:true},

procentageRabais:{
    type:Number,
    required:true},
  
    montantRabais:{
      type:Number,
      required:true},

})
const rabais = mongoose.model('Rabais', rabaisSchema, 'Rabais')
module.exports = rabais