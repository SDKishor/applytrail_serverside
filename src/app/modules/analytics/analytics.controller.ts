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

export const AnalyticsController = { createAnalytics };
