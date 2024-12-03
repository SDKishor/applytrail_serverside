import JobApplication from './jobApplication.model';

const getAllJobApplicationFromDB = async (id: string) => {
  const jobApplication = await JobApplication.find({
    profileId: id,
  });

  return jobApplication;
};

export const JobApplicationService = {
  getAllJobApplicationFromDB,
};
