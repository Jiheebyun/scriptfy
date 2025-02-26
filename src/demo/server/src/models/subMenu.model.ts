import { Schema, model, Types, Document } from 'mongoose';

interface ISubMenu extends Document {
  menu_id: Types.ObjectId;
  label: string;
  url: string;
}

const subMenuSchema = new Schema<ISubMenu>({
  menu_id: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',  // <- 'Menu' 모델 참조(실제로는 'menu' 컬렉션)
    required: true,
  },
  label: { type: String, required: true },
  url: { type: String, required: true },
});

// 'SubMenu'라는 모델 이름, 실제 컬렉션명: 'subMenu'
export const SubMenu = model<ISubMenu>('SubMenu', subMenuSchema, 'subMenu');
