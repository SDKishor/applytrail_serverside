import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { AnalyticsService } from './analytics.service';

const createAnalytics: RequestHandler = catchAsync(async (req, res) => {
  const result = await AnalyticsService.createAnalyticsIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Analytics created successfully',
    data: result,
  });
});

const getAnalytics: RequestHandler = catchAsync(async (req, res) => {
  const { profileId } = req.params;

  if (!profileId) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'profileId is required',
      data: null,
    });
  }

  const result = await AnalyticsService.getAnalyticsFromDB(profileId);

  if (result.length === 0) {
    return sendResponse(res, {
      statusCode: 404,
      success: false,
      message: 'Analytics not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Analytics fetched successfully',
    data: result,
  });
});

export const AnalyticsController = {
  createAnalytics,
  getAnalytics,
};
