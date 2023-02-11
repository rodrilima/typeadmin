import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import { isAuthenticated } from './middlewares/auth.middleware'

export const app = express()
app.use(express.json())
app.use(cors())

function getUser(email) {
  const users = [
    {
      email: 'contato@type.dev.br',
      senha: '123456',
      role: 'admin'
    },
    {
      email: 'rodrigo@type.dev.br',
      senha: '123456',
      role: 'customer'
    }
  ]

  return users.find(user => user.email === email)
}

app.post('/auth', (req, res) => {
  const { email, senha } = req.body;

  const user = getUser(email)

  if (senha === user.senha) {
    if (user.role !== 'admin') {
      return res.status(403).send({
        error: 'User not authorized'
      })
    }

    return res.status(200).json({
      token: jwt.sign(
        {
          email,
          role: 'admin'
        }, 
        process.env.JWT_TOKEN,
        { expiresIn: "24h" }
      )
    })
  }

  return res.status(401).json({
    error: 'Authentication data error'
  })
})

app.get('/users', isAuthenticated, (req, res) => {
  return res.status(200).json([{
    email: 'contato@type.dev.br'
  }])
})