import Analytics from '../analytics/analytics.model';
import { IJobApplication } from './jobApplication.interface';
import JobApplication from './jobApplication.model';

const getAllJobApplicationFromDB = async (id: string) => {
  const jobApplication = await JobApplication.find({
    profileId: id,
  });

  return jobApplication;
};

const createJobApplicationIntoDB = async (payload: IJobApplication) => {
  const analytics = await Analytics.find({
    profileId: payload.profileId,
  });

  if (analytics.length === 0) {
    throw new Error('Analytics not found');
  }

  payload.analyticsId = analytics[0]._id;

  const data = new JobApplication(payload);
  data.validate();

  const result = await JobApplication.create(payload);

  if (!result) {
    throw new Error('Failed to create jobApplication');
  } else {
    //update analytics
    await Analytics.updateOne(
      { profileId: payload.profileId },
      {
        $inc: {
          applied: 1,
          screening: true,
          [`source.${payload.source}`]: 1,
        },
      },
    );

    return result;
  }
};

export const JobApplicationService = {
  getAllJobApplicationFromDB,
  createJobApplicationIntoDB,
};
