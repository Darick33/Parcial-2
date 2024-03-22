import { Module } from '@nestjs/common';
import { AeropuertosController } from './aeropuertos.controller';
import { AeropuertosService } from './aeropuertos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AEROPUERTOS } from 'src/models/models';
import { AeropuertosSchema } from './schema/aeropuertos.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: AEROPUERTOS.name,
      useFactory: () => AeropuertosSchema
    }])
  ],
  controllers: [AeropuertosController],
  providers: [AeropuertosService],
  exports: [AeropuertosService],
})
export class AeropuertosModule {}
