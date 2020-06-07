const express = require('express');
const helmet = require('helmet');
const db = require('../data/db')

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.get('/', async (req, res)=> {
    try{
        const shouts = await db('shouts');
        res.status(200).json({messageOfTheDay: process.env.MOTD, shouts})
    }
    catch(error){
        console.log(error);
        res.status(500).json(`errorMessage: Can not retrieve the shouts`)
    }
})

module.exports = server;
