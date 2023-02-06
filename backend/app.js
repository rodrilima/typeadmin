import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.routes'
import { usersRouter } from './routes/users.routes'

dotenv.config()

export const app = express()

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
app.use('/users', usersRouter)
