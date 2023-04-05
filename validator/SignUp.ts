import {Expose,Exclude, Transform} from 'class-transformer'
import {IsEmail, IsNotEmpty, MinLength} from "class-validator"

@Exclude()
export  class SignUpClass{
    @IsNotEmpty({message:'این فیلد نباید خالی باشد'})
    @Expose()
    username:string;
    @IsNotEmpty({message:'این فیلد نباید خالی باشد'})
    @IsEmail({},{message:'ایمیل معتبر نیست'})
    @Expose()
    email:string;
    @IsNotEmpty({message:'این فیلد نباید خالی باشد'})
    @Expose()
    password:string;
    @IsNotEmpty({message:'این فیلد نباید خالی باشد'})
    @Expose()
    repeated_password:string;
}