import { Router } from 'express';
import { JobApplicationController } from './jobApplication.controller';

const router = Router();

//get all jobApplication of a user
router.get('/:userProfileId', JobApplicationController.getAllJobApplication);

export const JobApplicationRoutes = router;
