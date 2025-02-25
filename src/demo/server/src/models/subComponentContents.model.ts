import { Schema, model } from 'mongoose';

export interface ISubComponentContents {
  title: string;
  description?: string;
}

const SubComponentContentsSchema = new Schema<ISubComponentContents>({
  title: { type: String, required: true },
  description: { type: String },
  // 다른 필드들...
}, {
  timestamps: true,
});

export const SubComponentContents = model<ISubComponentContents>(
  'subComponentContents',
  SubComponentContentsSchema
);
