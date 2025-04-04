import { Router } from 'express';
import healthRoutes from './health.routes';
import visaRoutes from './visa.routes';
import authRoutes from './auth.routes';

const router = Router();

// Welcome message for root endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to VisaEase API',
    version: '1.0.0',
    documentation: '/api-docs',
    endpoints: {
      auth: '/api/auth',
      visa: '/api/visa',
      health: '/health'
    }
  });
});

// Mount routes
router.use('/health', healthRoutes);
router.use('/api/visa', visaRoutes);
router.use('/api/auth', authRoutes);

export default router; 