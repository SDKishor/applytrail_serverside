import { Router } from 'express';
import { JobApplicationRoutes } from '../modules/jobApplication/jobApplication.route';
import { AnalyticsRoutes } from '../modules/analytics/analytics.route';
import { UserProfileRoutes } from '../modules/userProfile/userProfile.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/job-application',
    route: JobApplicationRoutes,
  },
  {
    path: '/analytics',
    route: AnalyticsRoutes,
  },
  {
    path: '/user-profile',
    route: UserProfileRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
