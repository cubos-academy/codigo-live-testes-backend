const knex = require("./database/conn")
const { v4: uuid } = require("uuid")

class CreateUser {
	async handle(data){
		const { name, email, password } = data

		const emailExists = await knex('users').where('email', email).first()

		if (emailExists) {
			throw new Error('Email já existe!')
		}

		const user = await knex('users').insert({
			id: uuid(),
			name,
			email,
			password
		}).returning('*')

		return user[0]
	}
}

module.exports = { CreateUser }