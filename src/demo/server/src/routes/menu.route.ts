import { Router } from 'express';
import { getMenuWithSubmenu } from '../controllers/menu.controller';

const router = Router();

router.get('/menu', getMenuWithSubmenu); // api/menu

export default router;