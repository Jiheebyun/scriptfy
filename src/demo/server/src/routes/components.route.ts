import { Router } from 'express';
import { getComponentsWithSubContents } from '../controllers/components.controller';
import { getComponents } from '../controllers/components.controller';

const router = Router();

// 조인 예시
router.get('/', getComponentsWithSubContents); // api/components

router.get('/test', getComponents)

export default router;
