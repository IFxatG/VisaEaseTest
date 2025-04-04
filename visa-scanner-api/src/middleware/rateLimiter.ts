import rateLimit from 'express-rate-limit';
import { config } from 'dotenv';

config();

const parseTimeWindow = (timeStr: string): number => {
  const unit = timeStr.slice(-1);
  const value = parseInt(timeStr.slice(0, -1));
  
  switch(unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 60 * 60 * 1000;
    case 'd': return value * 24 * 60 * 60 * 1000;
    default: return value;
  }
};

export const apiLimiter = rateLimit({
  windowMs: parseTimeWindow(process.env.RATE_LIMIT_WINDOW || '15m'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: {
    status: 429,
    error: 'Too many requests, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per window
  message: {
    status: 429,
    error: 'Too many login attempts, please try again after 15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 upload requests per hour
  message: {
    status: 429,
    error: 'Upload limit reached, please try again after an hour',
  },
  standardHeaders: true,
  legacyHeaders: false,
}); 