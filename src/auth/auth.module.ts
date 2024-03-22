// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { PasajerosModule } from 'src/pasajeros/pasajeros.module';

// @Module({
//   imports: [
//     PasajerosModule, PassportModule, JwtModule.register({
//       secret: process.env.JWT_SECRET,
//       signOptions: {
//          expiresIn: process.env.JWT_EXPIRATION_TIME,
//          audience: process.env.API_URL,
//         }
//     })
    
    
//   ],
//   controllers: [AuthController],
//   providers: [AuthService],
//   exports: [AuthService],
  
// })
// export class AuthModule {}
// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.stategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PasajerosModule } from '../pasajeros/pasajeros.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Cambia esto a una clave secreta más segura
      signOptions: { expiresIn: '1h' }, // Configura la expiración del token
    }),
    PasajerosModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
