// src/utils/logger.ts
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // 기본 로그 레벨 (info 이상)
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(), // 콘솔 출력
    new transports.File({ filename: 'logs/combined.log' }), // 모든 로그 파일
    new transports.File({ filename: 'logs/error.log', level: 'error' }) // 에러 로그 파일
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'logs/exceptions.log' })
  ]
});

export default logger;
