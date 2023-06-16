import knex from './database/conn.js'
import { v4 as uuid } from 'uuid'

export class CreateUser {
	async handle(data){
		const { name, email, password } = data

		console.log(data)

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

		return user
	}
}