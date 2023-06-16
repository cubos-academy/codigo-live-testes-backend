const { CreateUser } = require("./create-user")
const UserRepository = require("./tests/UserRepository")



describe('create users', () => {
	test('create new user', async () => {
		const user = {
			name: 'Guido',
			email: 'guido2@email.com',
			password: '12345'
		}

		const createUser = new CreateUser()
		const userRepository = new UserRepository()

		const newUser = await createUser.handle(user, userRepository)

		expect(typeof newUser.id).toBe('string')
	})

	test('create an user with email exists', async () => {
		const user = {
			name: 'Guido',
			email: 'guido@email.com',
			password: '12345'
		}

		const createUser = new CreateUser()
		const userRepository = new UserRepository()

		expect(() => createUser.handle(user, userRepository))
			.rejects
			.toThrow('Email já existe!')
	})
})