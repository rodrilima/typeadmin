import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.route.js'
import { usersRouter } from './routes/users.route.js'

export const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/users', usersRouter)