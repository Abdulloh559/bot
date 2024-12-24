const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: '198.198.72.220',
    database: 'victor',
    password: 'Pn6ZNRZMDQRZadCN',
    port: 5432
})

module.exports = pool