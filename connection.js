const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "wm-22-precip-DB"
})

module.exports = client