const express = require('express');
const sessionMiddleware = require('./app/http/middleware/session');
const passport = require('./app/http/middleware/auth/passport');

const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const webRoutes = require('./routes/web');

require('dotenv').config();

const app = express();

/********************************************
 * registering middlewares
********************************************/
app.use(express.json());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());


/********************************************
 * registering the routes
********************************************/
app.use('/', loginRoutes);
app.use('/', userRoutes);
app.use('/', webRoutes);

const port = process.env.PORT;
app.listen(port, () => { console.log(`Server started on port ${port}`) });