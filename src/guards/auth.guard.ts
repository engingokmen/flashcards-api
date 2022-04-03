import {
  NotFoundException,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      request.currentUser = {};
      return false;
    }

    try {
      const user = verify(token, 'test');
      request.currentUser = user;
      return true;
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
