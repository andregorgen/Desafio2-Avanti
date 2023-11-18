import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreatePlaceController{
  async handle(request: Request, response: Response) {
    try {
        const { name } = request.body;

        const place = await prismaClient.place.create({
          data:{
            name
          }
        });
      return response.status(201).json(place);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class ListPlaceController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.place.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class UpdatedPlaceController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const id = request.params.id;
      const updatePlace = await prismaClient.place.update({
        where:{id},
        data:{
          name
        }
      });
      return response.status(200).json({ message:'Place Updated ', updatePlace});
    } catch(e) {
      return response.status(500).json({messageError:'Server Error!'});
    }
  }
}