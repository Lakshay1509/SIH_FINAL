import {Router} from 'express'
import {makePayment} from "../controllers/user.controller.js"

const router = Router()

router.route("/payment").post(makePayment)

export default router