import { Router } from 'express'
import { CreateUser } from './create-user.js'

const routes = Router()

routes.post('/user', async (req, res) => {
	console.log(req.body)
	const createUser = new CreateUser()
	const newUser = await createUser.handle(req.body)
	return res.status(201).json(newUser)
})

export default routes