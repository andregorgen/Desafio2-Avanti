import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class FindByCategoryController{
    async handle(request: Request, response: Response) {
      try {
          const { category_id } = request.params;
  
          const eventByCategory = await prismaClient.event.findMany({
            where: {
              category_id,
            }
          });
        return response.json(eventByCategory);
      } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
      }
    }
  }

  export class FindByPlaceController{
    async handle(request: Request, response: Response) {
      try {
          const { place_id } = request.params;
  
          const eventByPlace = await prismaClient.event.findMany({
            where: {
              place_id,
            }
          });
        return response.json(eventByPlace);
      } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
      }
    }
  }

  export class FindByDateController{
    async handle(request: Request, response: Response) {
      try {
          const { date } = request.params;
  
          const eventByDate = await prismaClient.event.findMany({
            where: {
              date,
            }
          });
        return response.json(eventByDate);
      } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
      }
    }
  }

  export class FindByEventController{
    async handle(request: Request, response: Response) {
      try {
          const { id } = request.params;
  
          const eventById = await prismaClient.event.findMany({
            where: {
              id,
            }
          });
        return response.json(eventById);
      } catch (error) {
        return response.status(500).json({ error: 'An error occurred' });
      }
    }
  }