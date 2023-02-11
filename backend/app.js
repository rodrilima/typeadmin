import express from 'express'
import cors from 'cors'
import { isAuthenticated } from './middlewares/auth.middleware'
import { authenticate } from './controllers/auth.controller'
import { getUsers } from './controllers/users.controllers'

export const app = express()
app.use(express.json())
app.use(cors())

app.post('/auth', authenticate)

app.get('/users', isAuthenticated, getUsers)