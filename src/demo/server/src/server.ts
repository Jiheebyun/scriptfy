// server/src/server.ts
import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index'; // 중앙 라우터 임포트
import connectDB from './config/database';

dotenv.config(); // 환경 변수 로드

const app = express();

// 미들웨어 설정
app.use(express.json());
// app.use(cors());

// 라우트 등록
app.use('/api', routes); // 모든 라우트가 /api 하위에 위치

// 기본 라우트
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 동작 중입니다.');
});

// DB 연결 후 서버 시작
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  });
});
