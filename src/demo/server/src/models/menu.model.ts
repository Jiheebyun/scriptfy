import { Schema, model, Types } from 'mongoose';

const menuSchema = new Schema({
  component_id: { type: Types.ObjectId, ref: 'components' },
  menuTitle: String,
  path: String,
});

export const Menu = model('menu', menuSchema);
