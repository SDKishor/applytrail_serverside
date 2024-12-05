import { Types } from 'mongoose';

export interface IJobApplication {
  title: string;
  description?: string;
  company: string;
  salaryRange: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  applyDate: Date;
  interviewDate?: Date;
  status: 'Applied' | 'Interviewing' | 'Offered' | 'Rejected' | 'Accepted';
  source: 'Linkedin' | 'companyWebsite' | 'jobBoard' | 'referrals';
  analyticsId: Types.ObjectId; // ID for tracking analytics
  profileId: string; // ID of the user profile associated with the job application
}
