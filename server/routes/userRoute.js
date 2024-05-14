import express from 'express'
import { signup, login } from '../controllers/auth.js'
import { updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.patch('/update/:id', updateUser);
router.patch('/delete/:id', deleteUser);

export default router;