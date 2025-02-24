import { Request, Response } from 'express';
import { Components } from '../models/components.model';

export const getComponentsWithSubContents = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("실행");
      const pipeline = [
        {
          $lookup: {
            from: 'subComponentContents',   // 조인할 다른 컬렉션 이름
            localField: '_id',              // components 컬렉션의 _id 필드
            foreignField: 'component_id',   // subComponentContents 컬렉션의 component_id 필드
            as: 'subContents',              // 조인 결과를 담을 필드 (배열)
          },
        },
        // 필요 시 추가 $match, $project 등을 삽입할 수 있습니다.
      ];
      
      const result = await Components.aggregate(pipeline);
      console.log(result);
      console.log(result[0].subContents)
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getComponents = async (req: Request, res: Response): Promise<void> => {
  try {
    const componentsData = await Components.find({});
    res.json(componentsData);
    console.log(componentsData)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
