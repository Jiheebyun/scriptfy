import { Schema, model, Types } from 'mongoose';

const subMenuSchema = new Schema({
  menu_id: { type: Types.ObjectId, ref: 'menu' },  // 부모 menu 컬렉션 참조
  label: String,
  url: String
});

export const SubMenu = model('subMenu', subMenuSchema);
