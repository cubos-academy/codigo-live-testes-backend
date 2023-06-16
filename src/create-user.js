const { v4: uuid } = require("uuid")

class CreateUser {
	async handle(data, repository){
		const { name, email, password } = data

		const emailExists = await repository.findByEmail(email)

		if (emailExists) {
			throw new Error('Email já existe!')
		}

		const user = await repository.create({
			id: uuid(),
			name,
			email,
			password
		})

		return user
	}
}

module.exports = { CreateUser }