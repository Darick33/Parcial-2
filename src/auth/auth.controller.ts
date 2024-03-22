import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('correo') correo: string, @Body('contrasenia') contrasenia: string) {
    return this.authService.login(correo, contrasenia);
  }
}

