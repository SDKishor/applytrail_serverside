import { Router } from 'express';
import { AnalyticsController } from './analytics.controller';

const router = Router();

router.post(
  '/create-analytics/:userProfileId',
  AnalyticsController.createAnalytics,
);

export const AnalyticsRoutes = router;
