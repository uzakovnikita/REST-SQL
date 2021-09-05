const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postres",
    password: "123456",
    host: 'localhost',
    port: 5432,
    database: 'REST'
});

module.exports = pool;
