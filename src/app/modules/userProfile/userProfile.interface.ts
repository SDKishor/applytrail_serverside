type TworkType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface IUserProfile {
  profileId: string;
  username?: string;
  email: string;
  bio?: string;
  skills?: {
    technicalSkills: string[];
    softSkills: string[];
  };
  jobPreferences?: {
    preferredLocations: string[];
    salaryRange: string;
    workType: TworkType[];
  };
}
