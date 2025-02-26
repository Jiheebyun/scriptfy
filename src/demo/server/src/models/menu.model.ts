import { Schema, model, Types, Document } from 'mongoose';

interface IMenu extends Document {
  component_id: Types.ObjectId;
  menuTitle: string;
  path: string;
}

const menuSchema = new Schema<IMenu>({
  component_id: { type: Schema.Types.ObjectId, required: true },
  menuTitle: { type: String, required: true },
  path: { type: String, default: '' },
});

// 한 번만 'Menu' 모델 이름으로 선언하되, 세 번째 인자로 'menu' 컬렉션명 지정
export const Menu = model<IMenu>('Menu', menuSchema, 'menu');
