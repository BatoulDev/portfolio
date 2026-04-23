const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        message: 'Access denied. No token provided.' 
      })
    }

    const token = authHeader.substring(7)
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      req.user = decoded
      next()
    } catch (err) {
      return res.status(401).json({ 
        message: 'Invalid or expired token.' 
      })
    }
  } catch (error) {
    return res.status(500).json({ 
      message: 'Authentication error' 
    })
  }
}

module.exports = authMiddleware