import { Router } from 'express';
import { getMenuWithSubmenu } from '../controllers/menu.controller';


const router = Router();

// 조인 예시
router.get('/menu', getMenuWithSubmenu); // api/menu


export default router;