const express = require('express');
const sessionMiddleware = require('./middleware/session');
const passport = require('./auth/passport');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

const port = process.env.PORT;
app.listen(port, () => { console.log(`Server started on port ${port}`) });