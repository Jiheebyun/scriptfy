// server/src/routes/user.route.ts
import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);     // GET /api/users
router.get('/:id', getUserById);  // GET /api/users/:id

export default router;
