import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class createEventController {
  async handle(request: Request, response: Response) {
    try {
      const { name, date, description, place_id, category_id } = request.body;

      await prismaClient.event.create({
        data: {
          name,
          date,
          description,
          place_id,
          category_id
        },
      });
      const selectEvent = await prismaClient.event.findFirst({
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });
      return response.status(201).json(selectEvent);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class listEventController {
  async handle(request: Request, response: Response) {
    try {
      const event = await prismaClient.event.findMany({
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });
      const answerFormated = event.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        category: event.category.name,
        place: event.place.name,
      }));

      return response.status(200).json(answerFormated);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class ListEventIdController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id
      const event = await prismaClient.event.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });

      if (!event) {
        return response.status(404).json({ message: 'Evento não encontrado.' });
      }

      const answerFormated = {
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        category: event.category.name,
        place: event.place.name,
      };
      return response.status(200).json(answerFormated)
    } catch (error) {
      return response.status(500).json({ messageError: 'Server Error!' })
    }
  }
}

export class updateController {
  async handle(request: Request, response: Response) {
    try {
      const { name, date, category_id, place_id, description } = request.body;
      const id = request.params.id
      const new_event = await prismaClient.event.update({
        where: { id },
        data: {
          name,
          date,
          category_id,
          place_id,
          description
        }
      });
      return response.status(200).json({ message: 'User Updated ', new_event })
    } catch (error) {
      return response.status(500).json({ messageError: 'Server Error!' })
    }
  }
}

export class deleteController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id
      const deleteUser = await prismaClient.event.delete({
        where: { id }
      })
      return response.status(204).json({})
    }
    catch (error) {
      return response.status(500).json({ messageError: 'Server Error!' })
    }
  }
}

export class listEventByCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.params
    try {
      const event = await prismaClient.event.findMany({
        where: {
          category: {
            name
          }
        },
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });
      const answerFormated = event.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        category: event.category.name,
        place: event.place.name,
      }));

      return response.status(200).json(answerFormated);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class listEventByPlaceController {
  async handle(request: Request, response: Response) {
    const { name } = request.params
    try {
      const event = await prismaClient.event.findMany({
        where: {
          place: {
            name
          }
        },
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });
      const answerFormated = event.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        category: event.category.name,
        place: event.place.name,
      }));

      return response.status(200).json(answerFormated);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}

export class listEventByDateController {
  async handle(request: Request, response: Response) {
    const { date } = request.params
    try {
      const event = await prismaClient.event.findMany({
        where: {
          date
        },
        select: {
          id: true,
          name: true,
          date: true,
          description: true,
          category: { select: { name: true } },
          place: { select: { name: true } },
        },
      });
      const answerFormated = event.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        category: event.category.name,
        place: event.place.name,
      }));

      return response.status(200).json(answerFormated);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}