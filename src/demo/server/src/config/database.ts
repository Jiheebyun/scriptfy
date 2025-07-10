// server/src/config/database.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // .env 파일에서 환경 변수 로드
console.log('> MONGO_URI:', process.env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI || 'your_default_mongodb_uri';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 실패:', error);
    process.exit(1); // 연결 실패 시 프로세스 종료
  }
};

export default connectDB;
