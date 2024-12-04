import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { AnalyticsService } from './analytics.service';
import mongoose from 'mongoose';

const createAnalytics: RequestHandler = catchAsync(async (req, res) => {
  const userProfileId = req.params.userProfileId;

  if (!userProfileId) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'userProfileId is required',
      data: null,
    });
  }

  // if (!mongoose.Types.ObjectId.isValid(userProfileId)) {
  //   return sendResponse(res, {
  //     statusCode: 400,
  //     success: false,
  //     message: 'Invalid userProfileId format',
  //     data: null,
  //   });
  // }

  const Id = new mongoose.Types.ObjectId(userProfileId);

  const result = await AnalyticsService.createAnalyticsIntoDB({
    data: req.body,
    profileId: Id,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Analytics created successfully',
    data: result,
  });
});

export const AnalyticsController = { createAnalytics };
