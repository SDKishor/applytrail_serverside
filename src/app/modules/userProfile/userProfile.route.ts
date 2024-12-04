import { Router } from 'express';
import { UserProfileController } from './userProfile.controller';

const router = Router();

router.post('/create', UserProfileController.createUserProfile);

export const UserProfileRoutes = router;
