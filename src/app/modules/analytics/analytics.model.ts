import mongoose, { Schema } from 'mongoose';
import { IAnalytics } from './analytics.interface';

const AnalyticsSchema = new Schema<IAnalytics>(
  {
    applied: { type: Number, default: 0 },
    screening: { type: Number, default: 0 },
    interview: { type: Number, default: 0 },
    offer: { type: Number, default: 0 },
    weekData: {
      w1: { type: Number, default: 0 },
      w2: { type: Number, default: 0 },
      w3: { type: Number, default: 0 },
      w4: { type: Number, default: 0 },
      w5: { type: Number, default: 0 },
      w6: { type: Number, default: 0 },
    },
    source: {
      linkedin: { type: Number, default: 0 },
      companyWebsite: { type: Number, default: 0 },
      jobBoard: { type: Number, default: 0 },
      referrals: { type: Number, default: 0 },
    },
    profileId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Analytics = mongoose.model<IAnalytics>('Analysis', AnalyticsSchema);

export default Analytics;
