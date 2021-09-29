import { Router } from 'express';
import appointmentsRoutter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRoutter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutter);
routes.use('/users', usersRoutter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
export default routes;
