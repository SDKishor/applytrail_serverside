import mongoose, { Schema } from 'mongoose';
import { IUserProfile } from './userProfile.interface';

const UserProfileSchema: Schema = new Schema(
  {
    profileId: { type: String, required: true, unique: true },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    skills: {
      technicalSkills: { type: [String], default: [] },
      softSkills: { type: [String], default: [] },
    },
    jobPreferences: {
      preferredLocations: { type: [String] },
      salaryRange: { type: String },
      workType: {
        type: [String],
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      },
    },
  },
  {
    timestamps: true,
  },
);

// Export the model
const UserProfile = mongoose.model<IUserProfile>(
  'UserProfile',
  UserProfileSchema,
);

export default UserProfile;
