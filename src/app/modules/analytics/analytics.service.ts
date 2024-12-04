import Analytics from './analytics.model';
import { IAnalytics } from './analytics.interface';
import { Types } from 'mongoose';

interface payloadProps {
  data: IAnalytics;
  profileId: Types.ObjectId;
}

const createAnalyticsIntoDB = async (
  payload: payloadProps,
): Promise<IAnalytics> => {
  const { data, profileId } = payload;

  data.profileId = profileId;

  const result = await Analytics.create(data);
  return result;
};

export const AnalyticsService = {
  createAnalyticsIntoDB,
};
