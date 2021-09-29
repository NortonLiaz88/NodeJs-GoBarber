import { response, Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import AppointmentsRepository from '../../typeorm/repositories/AppointmentsRepository';
import AppointmentsControler from '../../controllers/AppointmentsController';

const appointmentsRoutter = Router();
const appointmentController = new AppointmentsControler();

appointmentsRoutter.use(ensureAuthenticated);

appointmentsRoutter.post('/', appointmentController.create);

// appointmentsRoutter.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentsRepository.find();
//   return response.json(appointments);
// });

export default appointmentsRoutter;
