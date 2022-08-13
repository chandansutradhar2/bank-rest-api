import { Injectable } from '@nestjs/common';
import { SignInDTO } from './auth/dtos/signin-request.dto';

@Injectable()
export class AuthService {
    
  authenticateUser(user:SignInDTO){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log(user);
        user.mobileNo=='8080811145'?
        resolve({token:'iu39eu39eu2232', status:true}):resolve({status:false, msg:'invalid credentials'});
      },1000);
    })
  }
}
