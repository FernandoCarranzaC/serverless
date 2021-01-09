const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Categorias = mongoose.model('Categoria', new Schema({
    claveCat: String,
    nombreCat: String
}))

module.exports = Categorias