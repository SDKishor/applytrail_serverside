import Analytics from './analytics.model';
import { IAnalytics } from './analytics.interface';

const createAnalyticsIntoDB = async (
  payload: IAnalytics,
): Promise<IAnalytics> => {
  const result = await Analytics.create(payload);
  return result;
};

const getAnalyticsFromDB = async (payload: string): Promise<IAnalytics[]> => {
  //get analytic by the profileId
  const result = await Analytics.find({ profileId: payload });

  return result;
};

export const AnalyticsService = {
  createAnalyticsIntoDB,
  getAnalyticsFromDB,
};
