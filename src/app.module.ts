import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth.service';
import { AuthModule } from './auth/auth.module';
import { TokenHandlerMiddleware } from './token-handler.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenHandlerMiddleware)
      .forRoutes('auth');
  }
  
}
