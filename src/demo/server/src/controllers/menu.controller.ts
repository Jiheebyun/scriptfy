import { Request, Response } from 'express';
import { Menu } from '../models/menu.model';

export const getMenuWithSubmenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const menuWithSubmenu = await Menu.aggregate([
      {
        $lookup: {
          from: 'subMenu',        
          localField: '_id',
          foreignField: 'menu_id',
          as: 'children'
        }
      }
    ]);

    res.status(200).json(menuWithSubmenu);

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
