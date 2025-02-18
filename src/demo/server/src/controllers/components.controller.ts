import { Request, Response } from 'express';
import { Components } from '../models/components.model';

export const getComponentsWithSubContents = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("실행");
    const pipeline = [
      {
        $lookup: {
          from: 'subComponentContents',  // 조인할 다른 컬렉션명 (모델에 정의한 이름과 다를 수 있음)
          localField: 'subContent_id',   // components 컬렉션의 필드
          foreignField: '_id',           // subComponentContents 컬렉션의 필드
          as: 'subContents',             // 결과를 담을 필드 이름 (배열)
        },
      },
      // 추가적으로 $match, $project 등을 사용해 필터링하거나 필요한 필드만 선택할 수 있습니다.
    ];

    const result = await Components.aggregate(pipeline);
    res.json(result);
    console.log(result);
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
