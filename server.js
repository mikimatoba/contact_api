const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080


// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({extended: true}));

// load routers

app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT})`)});
