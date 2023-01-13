const express = require('express');
const router = require('express').Router();

const controller = require('../controller/contacts');

// ---ROUTES
// Get all the collection
router.get('/contacts', controller.getAll);
//Get one document
router.get('/contacts/:id', controller.getSingle);
//Update document - Put
router.put('/contacts/:id', controller.updateDoc);
//Delete document - Delete
router.delete('/contacts/:id', controller.deleteDoc);
//Create document - Post
router.post('/contacts', controller.createDoc);

 

module.exports = router;