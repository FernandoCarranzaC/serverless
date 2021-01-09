const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Jefes = mongoose.model('Jefe', new Schema({
    claveJefe: String,
    nombreJefe: String,
    idDepto: Number
}))

module.exports = Jefes