import { Router } from 'express';
import { GeoController } from '../controllers/geoController';

const router = Router();

/**
 * @swagger
 * /geo/city/{city}:
 *   get:
 *     summary: Get city information by name
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City information
 */
router.get('/city/:city', GeoController.getCity);

/**
 * @swagger
 * /geo/population/{country}:
 *   get:
 *     summary: Get most recent population for a country code
 *     parameters:
 *       - in: path
 *         name: country
 *         required: true
 *         schema:
 *           type: string
 *           example: US
 *     responses:
 *       '200':
 *         description: Population info
 */
router.get('/population/:country', GeoController.getPopulation);

/**
 * @swagger
 * /geo/report:
 *   post:
 *     summary: Create a new urban report
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - location
 *               - description
 *             properties:
 *               location:
 *                 type: string
 *                 example: "Main St & 3rd"
 *               description:
 *                 type: string
 *                 example: "Pothole causing delays"
 *     responses:
 *       '201':
 *         description: Report created
 */
router.post('/report', GeoController.createReport);

export default router;