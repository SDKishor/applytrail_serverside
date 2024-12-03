import { Router } from 'express';

const router = Router();

//get all jobApplication of a user
router.get('/:userProfileId', (req, res) => {
  res.send('jobApplication');
});

export const JobApplicationRoutes = router;
