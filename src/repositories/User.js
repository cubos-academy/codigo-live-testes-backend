const knex = require("../database/conn")

class User {
	async create(data){
		const { name, email, password, id } = data

		const user = await knex('users').insert({
			id,
			name,
			email,
			password
		}).returning('*')

		return user[0]
	}

	async findByEmail(email){
		return await knex('users').where('email', email).first()
	}
}

module.exports = User