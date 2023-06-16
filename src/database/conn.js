import knex from 'knex'

export default knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'live_testes_backend'
    }
})