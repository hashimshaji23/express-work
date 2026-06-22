import { Router } from "express"
import { Register } from "../controllers/userControllers"

const router = Router()

router.post('/register', Register)

export default router