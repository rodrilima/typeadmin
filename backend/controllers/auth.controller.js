import jwt from 'jsonwebtoken'

export class AuthController {
  authenticate(req, res) {
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
      error: 'Erro nos dados de autenticação'
    })
  }
}

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