import Analytics from './analytics.model';
import { IAnalytics } from './analytics.interface';

const createAnalyticsIntoDB = async (
  payload: IAnalytics,
): Promise<IAnalytics> => {
  const result = await Analytics.create(payload);
  return result;
};

export const AnalyticsService = {
  createAnalyticsIntoDB,
};
