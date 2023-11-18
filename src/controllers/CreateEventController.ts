import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class createEventController{
  async handle(request: Request, response: Response) {
    try {
        const { name, date, description, place, category } = request.body;

        const event = await prismaClient.event.create({
          data: {
            name,
            date,
            description,
            place,
            category
          },
        });
      return response.status(201).json(event);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class listEventController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.event.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class updateController{
  async handle(request: Request, response: Response){
    try{
      const {name, date,category,place,description} = request.body;
      const id = request.params.id
      const new_event = await prismaClient.event.update({
        where:{id},
        data:{
        name,
        date,
        category,
        place,
        description
        }
      });
      return response.status(200).json({message:'User Updated ',new_event})
    }catch(error){
      return response.status(500).json({messageError:'Server Error!'})
    }
  }
}

export class deleteController{
  async handle(request: Request, response: Response){
    try{
      const id = request.params.id
      const deleteUser = await prismaClient.event.delete({
        where:{id}
      })
      return response.status(204).json({})
    }
    catch(error){
      return response.status(500).json({messageError:'Server Error!'})
    }
  }
}


