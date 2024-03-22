import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { AvionesModule } from './aviones/aviones.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),  
    VuelosModule, AeropuertosModule, AvionesModule, PasajerosModule,AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
