// server/src/controllers/user.controller.ts
import { Request, Response } from 'express';

// 모든 사용자 조회
export function getAllUsers(req: Request, res: Response) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
}

// 특정 사용자 조회
export function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  // Mock 데이터
  const user = { id, name: 'MockUser' };
  res.json(user);
}
