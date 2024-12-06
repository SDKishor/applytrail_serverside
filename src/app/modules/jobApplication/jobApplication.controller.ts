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

const getSingleJobApplication: RequestHandler = catchAsync(async (req, res) => {
  const jobApplicationId = req.params.jobApplicationId;
  const jobApplication =
    await JobApplicationService.getSingleJobApplicationFromDB(jobApplicationId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'JobApplication fetched successfully',
    data: jobApplication,
  });
});

const updateJobApplication: RequestHandler = catchAsync(async (req, res) => {
  const jobApplicationId = req.params.jobApplicationId;
  const { interviewDate, status } = req.body;

  if (!jobApplicationId) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'jobApplicationId is required',
      data: null,
    });
  }

  if (!status) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'Status is required',
      data: null,
    });
  }
  if (status === 'Interviewing') {
    if (!interviewDate) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: 'interviewDate is required',
        data: null,
      });
    }
  }

  const jobApplication = await JobApplicationService.updateJobApplicationIntoDB(
    { id: jobApplicationId, interviewDate, status },
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'JobApplication updated successfully',
    data: jobApplication,
  });
});

export const JobApplicationController = {
  getAllJobApplication,
  createJobApplication,
  getSingleJobApplication,
  updateJobApplication,
};
