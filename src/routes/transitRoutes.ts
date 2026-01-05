import { Router } from 'express';
import { TransitController } from '../controllers/transitController';

const router = Router();

/**
 * @swagger
 * /transit/routes/{city}:
 *   get:
 *     summary: Get transit routes for a city (mocked)
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of transit routes
 */
router.get('/routes/:city', TransitController.getRoutes);

/**
 * @swagger
 * /transit/eta:
 *   get:
 *     summary: Get ETA for a stop
 *     parameters:
 *       - in: query
 *         name: stop_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: ETA info
 */
router.get('/eta', TransitController.getETA);

/**
 * @swagger
 * /transit/incident:
 *   post:
 *     summary: Create a transit incident report
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
 *                 example: "Station X platform 2"
 *               description:
 *                 type: string
 *                 example: "Smoke in the tunnel"
 *     responses:
 *       '201':
 *         description: Incident created
 */
router.post('/incident', TransitController.createIncident);

export default router;