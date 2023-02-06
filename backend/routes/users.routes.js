import { Router } from 'express'
import { PermissionMiddleware } from './middlewares/permission.middleware'
import { UsersController } from './controllers/users.controller'

export const usersRouter = Router()

const permissionMiddleware = new PermissionMiddleware()
const { isAuthenticated } = permissionMiddleware

const usersController = new UsersController()
const { index } = usersController

usersRouter.use(isAuthenticated)
usersRouter.get('/', index)