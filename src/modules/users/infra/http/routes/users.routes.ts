import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';

import { container } from 'tsyringe';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';
import CreateUserService from '@modules/users/services/CreateUserService';

import UsersRepository from '../../typeorm/repositories/UserRepository';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRoutter = Router();
const upload = multer(uploadConfig);
const userController = new UsersController();

const userAvatarController = new UserAvatarController();
usersRoutter.post('/', userController.create);

usersRoutter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRoutter;
