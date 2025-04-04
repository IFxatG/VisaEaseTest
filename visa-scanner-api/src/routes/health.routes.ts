import { Router } from 'express';
import logger from '../utils/logger';

const router = Router();

router.get('/', (req, res) => {
  logger.info('Health check requested');
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    uptime: process.uptime()
  });
});

export default router; 