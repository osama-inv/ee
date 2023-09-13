#!/usr/bin/node
// The Peoples api controller
const expressAsyncHandler = require('express-async-handler');
const People = require('../config/people_model.js');
const { parse } = require('dotenv');



const screenResult = (result) => {
    if (!result || typeof result !== 'object') {
        throw new Error('Invalid input. Expecting a Mongoose object.');
      }

      const objectCopy = { ...result._doc };
    
      delete objectCopy._id;
      delete objectCopy.__v;
    
      return objectCopy;
};

const createPerson = expressAsyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please Enter a name');
    }

    const highestId = await People.findOne({}, {}, { sort: { id: -1 } }).exec();
    let next = 1;

    if (highestId) {
      next = highestId.id + 1;
    }
    const person = await People.create({ id: next, name: req.body.name });
    const result = screenResult(person);
    res.status(201).json(result);
});

const getPeople = expressAsyncHandler(async (req, res) => {
    const people = await People.find();
    new_result = [];
    for (let i = 0; i < people.length; i++) {
        const result = screenResult(people[i]);
        new_result.push(result);
    }
    const result = screenResult(people);
    res.json(new_result);
});

const getPerson = expressAsyncHandler(async (req, res) => {
    const person = await People.findOne({ 'id': parseInt(req.params.id) });
    if (!person) {
        res.status(404);
        throw new Error('person not found');
    }
    const result = screenResult(person);
    res.status(200).json(result);
});

const updatePerson = expressAsyncHandler(async (req, res) => {
    const person = await People.findOne({'id': parseInt(req.params.id)});
    if (!person) {
        res.status(404);
        throw new Error('person not found');
    }
    const updatedItems = {};
    if (req.body.name) {
        updatedItems.name = req.body.name;
    }
    const UpdatedPerson = await People.findOneAndUpdate({'id': parseInt(req.params.id)}, { $set: updatedItems }, { new: true})
    const newPerson = await People.findOne({'id': parseInt(req.params.id)});
    const result = screenResult(newPerson);
    res.status(200).json(result);
});

const deletePerson = expressAsyncHandler(async (req, res) => {
    const person = await People.findOne({'id': parseInt(req.params.id)});
    if (!person) {
        res.status(404);
        throw new Error('person not found');
    }

    const holder = await People.deleteOne({'id': parseInt(req.params.id)});
    holder ? res.status(200).json(screenResult(person)): res.status(404).json({message: 'person not deleted'});
});

const personSearch = expressAsyncHandler(async (req, res) => {
    try {
      if (!req.query) throw new Error('Please provide search criteria.');
  
      const search = {name: req.query.name}
  
      const Peoples = await People.find(search);
  
      if (!Peoples.length) throw new Error('No Peoples found matching the search criteria.');
      const new_result = [];
      for (let i = 0; i < Peoples.length; i++) {
          const result = screenResult(Peoples[i]);
          new_result.push(result);
      }
      res.json(new_result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

const getStats = expressAsyncHandler(async (req, res) => {
    const people = (await People.find()).length;
    const result = {
        'People': people,
    }
    res.status(200) .json(result)
});

module.exports = { createPerson, getPeople, getPerson, updatePerson, deletePerson, personSearch, getStats};
