import { Module } from '@nestjs/common';
import { AvionesController } from './aviones.controller';
import { AvionesService } from './aviones.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AVIONES } from 'src/models/models';
import { AvionesSchema } from './schema/aviones.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: AVIONES.name ,
      useFactory: () => AvionesSchema,
    },
  ]),
  ],
  controllers: [AvionesController],
  providers: [AvionesService],
  exports: [AvionesService],
})
export class AvionesModule {}
