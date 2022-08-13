import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth.service';
import { AuthController } from './auth.controller';

@Module({
    controllers:[AuthController],
    exports:[AuthService],
    imports:[],
    providers:[AuthService]
})
export class AuthModule {
    
}
