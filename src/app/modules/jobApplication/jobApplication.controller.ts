import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobApplicationService } from './jobApplication.service';

const getAllJobApplication: RequestHandler = catchAsync(async (req, res) => {
  const userProfileId = req.params.userProfileId;

  if (!userProfileId) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'userProfileId is required',
      data: null,
    });
  }

  // Fetch all jobApplication of a user
  const result =
    await JobApplicationService.getAllJobApplicationFromDB(userProfileId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'JobApplications fetched successfully',
    data: result,
  });
});

const createJobApplication: RequestHandler = catchAsync(async (req, res) => {
  const jobApplication = await JobApplicationService.createJobApplicationIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'JobApplication created successfully',
    data: jobApplication,
  });
});

export const JobApplicationController = {
  getAllJobApplication,
  createJobApplication,
};
