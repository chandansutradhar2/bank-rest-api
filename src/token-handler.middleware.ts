import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TokenHandlerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('from inside middleware',req.body);
    next();
  }
}
