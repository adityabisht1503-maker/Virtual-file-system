const express = require('express');
const { Signup, Login } = require('../controllers/authcontroller');
const { uploud, insertfie, getuplouds, deletefile } = require('../controllers/Uploudcontoller');
const { authMiddleware } = require('../middlewear/authmiddlewear');

const Router = express.Router();

Router.post('/signup',Signup)
Router.post('/login',Login)
Router.post('/uploudfile',authMiddleware,uploud.single('file'),insertfie)
Router.get('/getuplouds', authMiddleware,getuplouds)
Router.delete('/deletefile/:id', authMiddleware, deletefile); // Add this

module.exports = {Router};