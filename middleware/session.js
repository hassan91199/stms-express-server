/*
  Session configuration and utilization of the MongoStore for storing
  the session in the MongoDB database
*/
const session = require('express-session');
const MongoStore = require('connect-mongo');
const db = require("../db/conn");

const sessionMiddleware = session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: db.client.s.url })
  });

module.exports = sessionMiddleware;