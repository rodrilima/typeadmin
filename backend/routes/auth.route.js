import { Router } from 'express';
import { authenticate } from '../controllers/auth.controller.js'

export const authRouter = Router();

authRouter.post('/', authenticate)