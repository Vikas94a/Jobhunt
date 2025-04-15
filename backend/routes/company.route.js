import express from 'express'
import isAuntenticated from '../middlewares/isAuntenticated.js'
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.js'


const router = express.Router()

router.route("/register").post(isAuntenticated, registerCompany)
router.route("/get").get(isAuntenticated, getCompany)
router.route("/update/:id").put(isAuntenticated, updateCompany)
router.route("/get/:id").get(isAuntenticated, getCompanyById)



export default router