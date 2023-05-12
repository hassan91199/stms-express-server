/*
  MongoDB Database connection
*/
const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.ATLAS_URL;
mongoose.connect(mongoString);
const db = mongoose.connection;

module.exports = db;