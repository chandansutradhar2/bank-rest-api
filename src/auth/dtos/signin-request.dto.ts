import { IsNotEmpty } from "class-validator";

export class SignInDTO{
    @IsNotEmpty({
        message:'mobileNo cannot be empty'
    })
    mobileNo:string;

    @IsNotEmpty()
    password:string;


}