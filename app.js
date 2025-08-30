require('dotenv').config();
const path = require('path')
const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
const app = express();
const PORT = 5000 || process.env.PORT;

connectDB();
//static
app.use(express.static(path.join(__dirname, 'public')));

//view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');
// -- routes --
const mainRoutes = require('./server/routes/main');
app.use('/', mainRoutes);


app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});

