const express = require('express')
const Departamentos = require('../models/Departamentos')

const router = express.Router()

router.get('/', (req, res) => {
    Departamentos.find()
        .exec()
        .then(x => res.status(200).send(x))
    //res.send('<h1>ALUMNOS GET</h1>')
})

router.get('/:id', (req, res) => {
    Departamentos.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Departamentos.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Departamentos.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Departamentos.findOneAndDelete(req.params.id).exec
        .then(() => res.sendStatus(204))
})

module.exports = router