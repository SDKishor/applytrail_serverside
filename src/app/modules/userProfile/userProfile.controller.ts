import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserProfileService } from './userProfile.service';

const getUserProfile: RequestHandler = catchAsync(async (req, res) => {
  const userProfile = await UserProfileService.getUserProfileFromDB(
    req.params.profileId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'userProfile fetched successfully',
    data: userProfile,
  });
});

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

const updateUserProfile: RequestHandler = catchAsync(async (req, res) => {
  const userProfile = await UserProfileService.updateUserProfileIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'userProfile updated successfully',
    data: userProfile,
  });
});

export const UserProfileController = {
  getUserProfile,
  createUserProfile,
  updateUserProfile,
};
