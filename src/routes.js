const { Router } = require('express')
const { CreateUser } = require('./create-user')

const routes = Router()

routes.post('/user', async (req, res) => {
	console.log(req.body)
	const createUser = new CreateUser()
	const newUser = await createUser.handle(req.body)
	return res.status(201).json(newUser)
})

module.exports = routes