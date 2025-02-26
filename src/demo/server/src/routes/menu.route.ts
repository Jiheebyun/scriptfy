import { Router } from 'express';
import { getMenuWithSubmenu } from '../controllers/menu.controller';

const router = Router();

router.get('/', getMenuWithSubmenu); // api/menu

export default router;