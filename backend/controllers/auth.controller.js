import jwt from 'jsonwebtoken'
import { getUser } from '../repositories/users.repository.js';

export async function authenticate(req, res) {
  const { email, senha } = req.body;

  const user = await getUser(email)

  if (senha === user?.senha) {
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
}