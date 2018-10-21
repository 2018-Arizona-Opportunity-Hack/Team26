const { Pool, Client } = require('pg');
const config = require('./dbConfig');

const pool = new Pool(config);

function getUsers(){
  pool.query('SELECT * from users', (err, res) => {
    console.log(err, res);
    pool.end();
  });
}


function getEvents(){
  pool.query('SELECT * from events', (err, res) => {
    console.log(err, res);
    pool.end();
  });
}

function getEvents_attended(){
  pool.query('SELECT * from events_attended', (err, res) => {
    console.log(err, res);
    pool.end();
  });
}
/*
function getAvailability (){
  pool.query('SELECT * from availability', (err, res) => {
    console.log(err, res)
    pool.end()
  });
}
/**/


// const client = new Client(config);
// client.connect()
//
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

/*

*/
