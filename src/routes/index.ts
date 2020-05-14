import { Router } from 'express';
import PlaceController from '../controllers/Place';

const router = Router();

router.use('/places', PlaceController);

export default router;
