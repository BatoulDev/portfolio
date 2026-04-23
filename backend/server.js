require('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' })
})

app.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to Portfolio API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth'
    }
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`API available at http://localhost:${PORT}/api`)
})

module.exports = app