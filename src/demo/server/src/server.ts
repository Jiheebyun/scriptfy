// server/src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes'; // 중앙 라우터 임포트
import connectDB from './config/database'; // MongoDB 연결 함수 임포트
// import { errorHandler } from './middleware/errorHandler'; // 에러 핸들링 미들웨어 임포트
import morgan from 'morgan'; // HTTP 요청 로깅
import logger from './utils/logger'; // 커스텀 로거 임포트

dotenv.config(); // 환경 변수 로드

const app = express();

// morgan을 winston과 연동하여 HTTP 요청 로깅
app.use(
  morgan('combined', {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  })
);

// 미들웨어 설정
app.use(express.json());
app.use(cors());

// 라우트 등록
app.use('/api', routes); // 모든 라우트 -> /api/something 하위에 위치

// 기본 라우트
app.get('/', (req, res) => {
    
  res.send('서버가 정상적으로 동작 중입니다.');
});

// 에러 핸들링 미들웨어
// app.use(errorHandler);

// DB 연결 후 서버 시작
const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`서버가 포트 ${PORT}에서 실행 중입니다.`);
    });
  })
  .catch((error) => {
    logger.error('MongoDB 연결 실패:', error);
    process.exit(1); // 연결 실패 시 프로세스 종료
  });
