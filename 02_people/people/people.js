#!/usr/bin/node
// The users api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { createPerson, getPeople, getPerson, updatePerson, deletePerson, personSearch, getStats }= require('./controller.js')

router.route('/peoples').get(getPeople).post(createPerson)
router.route('/people/:id').get(getPerson).put(updatePerson).delete(deletePerson)
router.route('/people_search').get(personSearch)
router.route('/stats').get(getStats)


module.exports = router
