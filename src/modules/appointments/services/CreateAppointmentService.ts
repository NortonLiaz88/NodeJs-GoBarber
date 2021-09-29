import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}
  public async execute({
    provider_id,
    date,
  }: IRequest): Promise<Appointment | undefined> {
    const appointmentData = startOfHour(date);

    const findAppointmentInSameDate =
      await this.appointmentRepository.findByDate(appointmentData);
    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already brooke', 400);
    }

    const appointment = this.appointmentRepository.create({
      provider_id,
      date: appointmentData,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
