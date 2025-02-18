import { Schema, model, Types } from 'mongoose';

export interface IComponents {
  subContent_id?: Types.ObjectId; // 다른 필드들도 필요하다면 여기에 추가
}

const ComponentsSchema = new Schema<IComponents>({
  subContent_id: {
    type: Schema.Types.ObjectId,
    ref: 'subComponentContents', 
  },
  // title, content 등 다른 필드가 있다면 여기 추가
}, {
  timestamps: true,
});


export const Components = model<IComponents>('components', ComponentsSchema);
