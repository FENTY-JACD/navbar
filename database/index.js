const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fentynav'
});

pool.query('select now()', (err, res) => {
  if (err) {
    return console.error('Error aquiring client', err.stack);
  } 
  console.log('connected');
  pool.end();
});

module.exports = pool;