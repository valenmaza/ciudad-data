import { Router } from 'express';
import { getCity } from '../controllers/geoController';

const router = Router();

// Endpoint para poder get city information
router.get('/city/:city', getCity);

export default router;