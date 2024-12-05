import { Router } from 'express';
import { AnalyticsController } from './analytics.controller';

const router = Router();

router.post('/create', AnalyticsController.createAnalytics);

router.get('/:profileId', AnalyticsController.getAnalytics);

export const AnalyticsRoutes = router;
