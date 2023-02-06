import { Router } from 'express'
import { AuthController } from './controllers/auth.controller'

export const authRouter = Router()
const authController = new AuthController()
const { authenticate } = authController

authRouter.post('/', authenticate)