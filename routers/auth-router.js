const authRouter = require('express').Router()
const {register, login, logout } = require('../controllers/authController')

authRouter.post("/register", register)

authRouter.post("/login", login)

authRouter.get("/logout", logout)

module.exports = authRouter