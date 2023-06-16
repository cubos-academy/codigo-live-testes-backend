const { Router } = require('express')
const { CreateUser } = require('./create-user')
const User = require("./repositories/User")

const routes = Router()

routes.post('/user', async (req, res) => {
	console.log(req.body)
	const createUser = new CreateUser()
	const userRepository = new User()
	const newUser = await createUser.handle(req.body, userRepository)
	return res.status(201).json(newUser)
})

module.exports = routes