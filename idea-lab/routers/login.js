const { verifyPassword } = require('../sqlStatments/findallforLogin')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', verifyPassword, async (req, res) => {
  try {
    if (req.password && req.password.length >= 1) {
      const verify = await bcrypt.compare(req.body.password, req.password)

      if (verify) {
        const email = req.body.email
        const table = req.table

        const payload = {
          email,
          table
        }

        const key = process.env.KEY
        const options = {
          expiresIn: '7d'
        }

        const token = jwt.sign(payload, key, options)

        res.send({ token, error: false })
      } else {
        res.status(401).json({ error: true })
      }
    } else {
      res.status(400).json({ error: true })
    }
  } catch (error) {
    res.status(500).json({ error: true })
  }
})

module.exports = router
