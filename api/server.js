const express = require('express');
const helmet = require('helmet');
const db = require('../data/db')

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.get('/', function (req, res){
   res.status(200).json({messageOfTheDay: process.env.MOTD})
})

server.use('/api', apiRouter);

module.exports = server;
