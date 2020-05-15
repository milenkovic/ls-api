import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { transformResponse } from '@services/PlaceService';
import superagent from 'superagent';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const data: any[] = [
    {
      name: 'Le Café du Marché',
      id: 'ohGSnJtMIC5nPfYRi_HTAg',
    },
    {
      name: 'Casa Ferlin',
      id: 'GXvPAor1ifNfpF0U5PTG0w',
    },
  ];
  return res.status(OK).json({
    data,
  });
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await superagent.get(
      `https://storage.googleapis.com/coding-session-rest-api/${id}`
    );
    return res.status(OK).json({ data: transformResponse(data.body) });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: err,
    });
  }
});

export default router;
