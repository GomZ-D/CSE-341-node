const express = require('express');
const router = require('express').Router();

const controller = require('../controller/contacts');

// ---ROUTES
router.get('/contacts', controller.getAll);
router.get('/contacts/:id', controller.getSingle);

module.exports = router;