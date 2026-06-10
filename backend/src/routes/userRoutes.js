import { Router } from "express";
import { editUser, getUser, getUsers, removeUser } from "../controllers/userController.js";

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', editUser)
router.delete('/:id', removeUser)

export default router