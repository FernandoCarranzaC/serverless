const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Departamentos = mongoose.model('Departamento', new Schema({
    claveDepto: String,
    nombreDepto: String,
    subdireccionDepto: String
}))

module.exports = Departamentos