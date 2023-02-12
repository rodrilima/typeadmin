import { Router } from 'express'
import { isAuthenticated } from '../middlewares/auth.middleware.js'
import { getUsers } from '../controllers/users.controllers.js'

export const usersRouter = Router()

usersRouter.use(isAuthenticated)
usersRouter.get('/', getUsers)