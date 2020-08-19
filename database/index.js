const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  port: 5432,
  database: 'fentynav'
});

pool.query('select now()', (err, res) => {
  if (err) {
    return console.error('Error aquiring client', err.stack);
  } 
  console.log('connected to database, fentynav, as user, postgres');
  // pool.end();
});

module.exports = pool;