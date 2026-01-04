import { Request, Response } from 'express';
import { getCityInfo } from '../services/geoService';

export const getCity = async (req: Request<{ city: string }>, res: Response) => {
    try {
        const { city } = req.params;
        if (!city) {
            return res.status(400).json({
                status: 'error',
                message: 'city parameter is required'
            });
        }
        const data = await getCityInfo(city);
        
        res.status(200).json({
            status: 'success',
            data: {
                nombre: data.name,
                pais: data.countryName,
                latitud: data.lat,
                longitud: data.lng,
                poblacion: data.population
            }
        });
    } catch (error: any) {
        res.status(404).json({
            status: 'error',
            message: error.message
        });
    }
};