// server/src/routes/index.ts
import { Router } from 'express';
import fs from 'fs';
import path from 'path';


// 폴더 및 파일 네이밍 규칙
// 일관된 폴더 및 파일 네이밍 규칙을 유지하면 프로젝트를 더욱 깔끔하게 관리
// 네이밍 규칙
// 라우트 파일: <resource>.route.ts (예: user.route.ts, product.route.ts)
// 컨트롤러 파일: <resource>.controller.ts (예: user.controller.ts, product.controller.ts)
// 모델 파일: <Resource>.ts (대문자 시작, 예: User.ts, Product.ts)
// 미들웨어 파일: <middleware>.ts (예: auth.ts, logger.ts)

const router = Router();

const routesPath = path.join(__dirname);

fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.route.ts')) {
    const route = require(path.join(routesPath, file)).default;
    const routeName = `/${path.basename(file, '.route.ts')}`;
    router.use(routeName, route);
  }
});

// /api/fileName

export default router;


