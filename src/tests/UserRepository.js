class UserRepository {
	users = [{
		id: '02e2f5a1-0398-4b12-8909-cc1f95bd9874',
		name: 'Guido',
		email: 'guido@email.com',
		password: '12345'
	}]

	async create(data){
		this.users.push(data)
		return data
	}

	async findByEmail(email){
		return this.users.find(user => user.email === email)
	}
}

module.exports = UserRepository