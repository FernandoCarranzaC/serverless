const express = require('express')
const Jefes = require('../models/Jefes')

const router = express.Router()

router.get('/', (req, res) => {
    Jefes.find()
        .exec()
        .then(x => res.status(200).send(x))
    //res.send('<h1>ALUMNOS GET</h1>')
})

router.get('/:id', (req, res) => {
    Jefes.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Jefes.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Jefes.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Jefes.findOneAndDelete(req.params.id).exec
        .then(() => res.sendStatus(204))
})

module.exports = router