const express = require('express');

const v1Router = require('./v1/index.js');
const v2Router = require('./v2/index.js')

const router = express.Router();       // router is an express class using wehich we can create modules for your routes

console.log("inside api routes");

router.use('/v1',v1Router )

router.use('/v2',v2Router )

module.exports =  router;