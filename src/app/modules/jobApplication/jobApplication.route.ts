import { Router } from 'express';
import { JobApplicationController } from './jobApplication.controller';

const router = Router();

//get all jobApplication of a user
router.get('/:userProfileId', JobApplicationController.getAllJobApplication);

//get jobApplication by id
router.get(
  '/getsinglejobapplication/:jobApplicationId',
  JobApplicationController.getSingleJobApplication,
);

//create jobApplication
router.post('/create', JobApplicationController.createJobApplication);

//update jobApplication
router.patch(
  '/update/:jobApplicationId',
  JobApplicationController.updateJobApplication,
);

export const JobApplicationRoutes = router;
