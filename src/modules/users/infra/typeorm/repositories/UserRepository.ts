import { EntityRepository, Repository, getRepository } from 'typeorm';
import User from '../entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const appoitment = await this.ormRepository.create(userData);
    await this.ormRepository.save(appoitment);

    return appoitment;
  }
  public async findByDate(date: Date): Promise<User | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });
    return findAppointment || undefined;
  }

  public save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
