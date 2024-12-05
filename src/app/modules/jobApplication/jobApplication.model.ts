import mongoose, { Schema } from 'mongoose';
import { IJobApplication } from './jobApplication.interface';

const jobApplicationSchema = new Schema<IJobApplication>(
  {
    title: { type: String, required: true },
    description: { type: String },
    company: { type: String, required: true },
    salaryRange: { type: String, required: true },
    jobType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      required: true,
    },
    applyDate: { type: Date, required: true },
    interviewDate: { type: Date },
    status: {
      type: String,
      enum: ['Applied', 'Interviewing', 'Offered', 'Rejected', 'Accepted'],
      required: true,
    },
    source: {
      type: String,
      enum: ['linkedin', 'companyWebsite', 'jobBoard', 'referrals'],
      required: true,
    },
    analyticsId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Analysis',
    },
    profileId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  },
);

const JobApplication = mongoose.model<IJobApplication>(
  'JobApplication',
  jobApplicationSchema,
);

export default JobApplication;
