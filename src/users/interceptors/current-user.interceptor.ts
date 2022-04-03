import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor() {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    return handler.handle();
  }
}
