import { IUserProfile } from './userProfile.interface';
import UserProfile from './userProfile.model';

const getUserProfileFromDB = async (profileId: string) => {
  const result = await UserProfile.findOne({ profileId: profileId });
  return result;
};

const createUserProfileIntoDB = async (payload: IUserProfile) => {
  const result = await UserProfile.create(payload);
  return result;
};

const updateUserProfileIntoDB = async (payload: IUserProfile) => {
  const result = await UserProfile.findOneAndUpdate(
    { profileId: payload.profileId },
    payload,
    { new: true },
  );
  return result;
};

export const UserProfileService = {
  getUserProfileFromDB,
  createUserProfileIntoDB,
  updateUserProfileIntoDB,
};
