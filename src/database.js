const mysql = require('mysql');

//keys
const { database } = require('./keys');

//check connection
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code =='PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code =='ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code =='ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is connected');
    return
});

module.exports = pool;
