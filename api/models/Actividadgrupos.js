const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Actividadgrupos = mongoose.model('Actividadgrupo', new Schema({
    claveGrpo: String,
    idCat: Number,
    idDepto: Number,
    nombreAct: String,
    idPers: Number,
    horarioAct: String,
    periodoAct: String,
    aperturaAct: String

}))

module.exports = Actividadgrupos