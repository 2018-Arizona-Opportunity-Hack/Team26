const { Pool, Client } = require('pg')
const config = require('./dbConfig');

const pool = new Pool(config);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client(config);
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
