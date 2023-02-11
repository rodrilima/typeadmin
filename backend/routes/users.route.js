import { Router } from 'express'
import { isAuthenticated } from './middlewares/auth.middleware'
import { getUsers } from './controllers/users.controllers'

export const usersRouter = Router()

usersRouter.use(isAuthenticated)
usersRouter.get('/', getUsers)