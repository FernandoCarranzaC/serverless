const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


const maestros = require('./routes/maestros')
const categorias = require('./routes/categorias')
const actividadgrupos = require('./routes/actividadgrupos')
const departamentos = require('./routes/departamentos')
const jefes = require('./routes/jefes')



const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })


app.use('/api/maestros', maestros)
app.use('/api/categorias', categorias)
app.use('/api/actividadgrupos', actividadgrupos)
app.use('/api/departamentos', departamentos)
app.use('/api/jefes', jefes)




module.exports = app