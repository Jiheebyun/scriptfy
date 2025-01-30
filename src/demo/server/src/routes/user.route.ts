// server/src/routes/product.route.ts
import { Router } from 'express';
import { getAllUsers, getUserById  } from '../controllers/user.controller';

const router = Router();

// 모든 사용자 조회
router.get('/', getAllUsers);

// 특정 사용자 조회
router.get('/:id', getUserById);

export default router;
