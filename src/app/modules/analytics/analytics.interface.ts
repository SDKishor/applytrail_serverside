import { Types } from 'mongoose';

export interface IAnalytics {
  applied: number;
  screening: number;
  interview: number;
  offer: number;
  weekData: {
    w1: number;
    w2: number;
    w3: number;
    w4: number;
    w5: number;
    w6: number;
  };
  profileId: Types.ObjectId;
}
