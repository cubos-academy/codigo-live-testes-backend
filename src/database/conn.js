const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'lucky.db.elephantsql.com',
        user: 'eqcwejqp',
        password: 'Bjd8vcqEIScgLAmfnGTmk1URCR3UQg6Y',
        database: 'eqcwejqp'
    }
})

module.exports = knex