import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from 'src/auth.service';
import { SignInDTO } from './dtos/signin-request.dto';

@Controller('auth')
export class AuthController {

    constructor(private authSvc:AuthService){

    }

    @Get()
    test(){
        return "auth working";
    }

    @Post('/signin')
    async signIn(@Body() body:SignInDTO){
        console.log(body);
        return await this.authSvc.authenticateUser(body);
       
    }

    @Post('/signup')
    signUp(@Request() req){

        return "sign-up working";
    }

    @Get()
    resetPassword(){

    }
}
