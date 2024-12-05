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
  source: 'LinkedIn' | 'Company website' | 'Job board' | 'Referrals';
  analyticsId: Types.ObjectId; // ID for tracking analytics
  profileId: string; // ID of the user profile associated with the job application
}
