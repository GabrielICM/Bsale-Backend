const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//database
const pool = require('./database');

//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2)
app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api',require('./routes/routes'));

//starting the server
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
});


