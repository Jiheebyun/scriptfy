// server/src/server.ts
import express from 'express';
import userRoutes from './routes/user.route'; // 예: 사용자 라우트 불러오기

const app = express();

// JSON 바디 파싱
app.use(express.json());

// 예시: 라우트 등록
app.use('/api/users', userRoutes);

// 서버 시작
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
