const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const toDosRoutes = require('./routes/toDos');

require('dotenv').config({ path: './config/.env' });

// passport config
require('./config/passport')(passport);

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', homeRoutes);
app.use('/todos', toDosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}.`);
});
