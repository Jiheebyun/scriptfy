import { Request, Response } from 'express';
import { Menu } from '../models/menu.model';

export const getMenuWithSubmenu = async (req: Request, res: Response): Promise<void> => {
  try {
    // MongoDB Aggregation 파이프라인 사용
    const menuWithSubmenu = await Menu.aggregate([
      {
        $lookup: {
          from: 'subMenu',        // 조인할 컬렉션 이름 (모델이 아니라 실제 MongoDB 컬렉션명)
          localField: '_id',       // Menu의 _id
          foreignField: 'menu_id', // SubMenu에서 참조하는 필드
          as: 'children'           // 결과를 담을 필드 이름
        }
      }
    ]);

    res.status(200).json(menuWithSubmenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
};
