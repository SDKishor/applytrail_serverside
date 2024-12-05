import { Router } from 'express';
import { AnalyticsController } from './analytics.controller';

const router = Router();

router.post('/create', AnalyticsController.createAnalytics);

export const AnalyticsRoutes = router;
