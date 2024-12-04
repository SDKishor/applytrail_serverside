import { IUserProfile } from './userProfile.interface';
import UserProfile from './userProfile.model';

const createUserProfileIntoDB = async (payload: IUserProfile) => {
  const result = await UserProfile.create(payload);
  return result;
};

export const UserProfileService = { createUserProfileIntoDB };
