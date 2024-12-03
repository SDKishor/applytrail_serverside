import { Router } from 'express';
import { JobApplicationRoutes } from '../modules/jobApplication/jobApplication.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/job-application',
    route: JobApplicationRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
