const express = require('express')
const Categorias = require('../models/Categorias')

const router = express.Router()

router.get('/', (req, res) => {
    Categorias.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Categorias.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Categorias.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Categorias.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Categorias.findOneAndDelete(req.params.id).exec
        .then(() => res.sendStatus(204))
})

module.exports = router