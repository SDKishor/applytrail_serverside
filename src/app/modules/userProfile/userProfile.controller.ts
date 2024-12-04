import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserProfileService } from './userProfile.service';

const createUserProfile: RequestHandler = catchAsync(async (req, res) => {
  const userProfile = await UserProfileService.createUserProfileIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'userProfile created successfully',
    data: userProfile,
  });
});

export const UserProfileController = {
  createUserProfile,
};
