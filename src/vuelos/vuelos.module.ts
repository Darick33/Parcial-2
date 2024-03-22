import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELOS } from 'src/models/models';
import { VuelosSchema } from './schema/vuelos.schema';
import { AvionesModule } from 'src/aviones/aviones.module';
import { AeropuertosModule } from 'src/aeropuertos/aeropuertos.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: VUELOS.name,
      useFactory: () => VuelosSchema.plugin(require('mongoose-autopopulate'))
    },
  ]),
  AvionesModule,
  AeropuertosModule,
  ],
  
  controllers: [VuelosController],
  providers: [VuelosService],
  exports: [VuelosService],
})
export class VuelosModule {}
