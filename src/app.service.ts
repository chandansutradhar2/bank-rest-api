import { Injectable } from '@nestjs/common';
import { SignInDTO } from './auth/dtos/signin-request.dto';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }



  createAccount(){

  }


}
