import { Router } from 'express';
import { authenticate } from './controllers/auth.controller'

export const authRouter = Router();

authRouter.post('/', authenticate)