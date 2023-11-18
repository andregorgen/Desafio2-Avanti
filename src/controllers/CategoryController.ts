import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateCategoryController{
  async handle(request: Request, response: Response) {
    try {
        const { name } = request.body;

        const category = await prismaClient.category.create({
          data:{
            name
          }
        });
      return response.status(201).json(category);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class ListCategoryController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.category.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class updateCategoryController {
  async handle(request: Request, response: Response){
    try{
      const { name } = request.body;
      const id = request.params.id;
      
      const updateCategory = await prismaClient.category.update({
        where: { id },
        data: {
          name
        }
      });

      return response.status(200).json({message:'Category updated ', updateCategory});

    }catch(error){
      return response.status(500).json({messageError:'Server Error!'})
    }
  }
}

export class deleteCategoryController{
  async handle(request: Request, response: Response){
    try{
      const id = request.params.id;
      const deleteCategory = await prismaClient.category.delete({
        where:{id}
      });
      return response.status(204).json({});
    }
    catch(error){
      return response.status(500).json({messageError:'Server Error!'});
    }
  }
}