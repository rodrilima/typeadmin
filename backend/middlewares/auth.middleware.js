import jwt from 'jsonwebtoken'

export function isAuthenticated(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.JWT_TOKEN)
    next()
  } catch(e) {
    return res.status(401).json({ error: 'Not authorized' })
  }
}