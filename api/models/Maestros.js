const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Maestros = mongoose.model('Maestro', new Schema({
    id: Number,
    nomMaestro: String
}))

module.exports = Maestros