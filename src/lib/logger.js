import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf(log => {
    return `${log.level.toUpperCase()} : ${JSON.stringify(log.message)}`;
  }),
  transports: [
    new DailyRotateFile({
      level: 'error',
      filename: 'log/application-error-%DATE%.log',
      zippedArchive: true,
      maxSize: '1m',
      maxFiles: '14d'
    }),
    new DailyRotateFile({
      level: 'info',
      filename: 'log/application-%DATE%.log',
      zippedArchive: true,
      maxSize: '2m',
      maxFiles: '14d'
    })
  ]
});
