import { Schema, model, Types } from 'mongoose';

export interface IComponents {
  subContent_id: Types.ObjectId;
}

const ComponentsSchema = new Schema<IComponents>({
  subContent_id: {
    type: Schema.Types.ObjectId,
    ref: 'subComponentContents', 
  },
  // 다른 필드들...
}, {
  timestamps: true,
});

export const Components = model<IComponents>('components', ComponentsSchema);
