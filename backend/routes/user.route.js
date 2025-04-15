import express from 'express'
import { logIn, logOut, register, updateProfile } from '../controllers/user.js'
import isAuntenticated from '../middlewares/isAuntenticated.js'

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(logIn)
router.route("/profile/update").put(isAuntenticated, updateProfile)
router.route("/logout").get(logOut)


export default router