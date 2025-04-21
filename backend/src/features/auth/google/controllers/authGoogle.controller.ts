import { CustomError } from '@/lib';
import { RequestHandler } from 'express';
import AuthenticationGoogleServices from '@/features/auth/google/services/AuthGoogle.service';

class AuthenticationGoogleController {
  login: RequestHandler = async (req, res, next) => {
    const { code } = req.body as { code: string };

    if (!code) return next(CustomError(500, 'Codigo no valido o no encontrado'));

    const response = await AuthenticationGoogleServices.autenticate(code);

    res.status(200).send(response);
  };
}

export default new AuthenticationGoogleController();
