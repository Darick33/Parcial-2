import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasajerosService } from '../pasajeros/pasajeros.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly pasajerosService: PasajerosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(correo: string, contrasenia: string): Promise<any> {
    const pasajero = await this.pasajerosService.BuscarporCorro(correo);
    if (!pasajero || !(await this.pasajerosService.VerificarContrasenia(contrasenia, pasajero.contrasenia))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return pasajero;
  }

  async login(correo: string, contrasenia: string) {
    const pasajero = await this.validateUser(correo, contrasenia);
    const payload = { correo: pasajero.correo, sub: pasajero._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
