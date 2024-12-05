import mongoose, { Schema } from 'mongoose';
import { IUserProfile } from './userProfile.interface';

const UserProfileSchema: Schema = new Schema(
  {
    profileId: { type: String, required: true, unique: true },
    username: { type: String, default: '' },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          // Simple regex for email validation
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: `The provided email is not a valid email address!`,
      },
    },
    bio: { type: String, default: '' },
    skills: {
      technicalSkills: { type: [String], default: [] },
      softSkills: { type: [String], default: [] },
    },
    jobPreferences: {
      preferredLocations: { type: [String], default: [] },
      salaryRange: { type: String, default: '' },
      workType: {
        type: [String],
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        default: [],
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
