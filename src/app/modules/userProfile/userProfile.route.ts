import { Router } from 'express';
import { UserProfileController } from './userProfile.controller';

const router = Router();

router.get('/:profileId', UserProfileController.getUserProfile);

router.post('/create', UserProfileController.createUserProfile);

router.patch('/update/', UserProfileController.updateUserProfile);

export const UserProfileRoutes = router;
