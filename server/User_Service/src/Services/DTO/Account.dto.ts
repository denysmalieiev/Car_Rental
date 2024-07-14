import { IsString, IsEmail, IsNotEmpty, MinLength, Matches } from "class-validator";
interface SignUp{
  username: string,
  email: string,
  password: string,
}
export class SignUpRequestDTO {
 
  // @IsString()
  // @IsNotEmpty()
  username: string;

  // @IsEmail()
  // @IsNotEmpty()
  email: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(8)
  // @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]+$/, { message: "password must contain at least one digit, one lowercase letter, one uppercase letter, and one special symbol" })
  password: string;

  constructor(body: any) {
    this.username = body.username;
    this.email = body.email;
    this.password = body.password;
  }
}

export class SignInRequestDTO {
  // @IsEmail()
  // @IsNotEmpty()
  email: string;

  // @IsString()
  // @IsNotEmpty()
  password: string;

  constructor(body: any) {
    this.email = body.email;
    this.password = body.password;
  }
}
