import { Router } from "express";
import { addEmployee, deleteEmployee, getEmployee, singleEmployee, updateEmployee } from "../controllers/employeeControllers.js";
import authChec from "../middlewires/authCheck.js";

const router = Router()


router.post('/add', authChec ,addEmployee)
router.get('/get', authChec, getEmployee)
router.get('/single', singleEmployee)
router.put('/edit', updateEmployee)
router.delete('/delete', deleteEmployee)

export default router