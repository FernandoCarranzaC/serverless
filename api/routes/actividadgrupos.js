const express = require('express')
const Actividadgrupos = require('../models/Actividadgrupos')

const router = express.Router()

router.get('/', (req, res) => {
    Actividadgrupos.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Actividadgrupos.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Actividadgrupos.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Actividadgrupos.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Actividadgrupos.findOneAndDelete(req.params.id).exec
        .then(() => res.sendStatus(204))
})

module.exports = router