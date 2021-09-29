import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';
import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();
passwordRouter.post('/forgot', forgotPasswordController.create);

export default passwordRouter;
