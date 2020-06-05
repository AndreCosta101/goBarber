import { Router } from 'express';

const appointmentsRouter = Router();

// http://localhost:3333/appointments

appointmentsRouter.post('/', (request, response) => {
  return response.json({ message: 'hello world' });
});

export default appointmentsRouter;
