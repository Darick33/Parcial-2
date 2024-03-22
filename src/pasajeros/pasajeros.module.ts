// import { Module } from '@nestjs/common';
// import { PasajerosController } from './pasajeros.controller';
// import { PasajerosService } from './pasajeros.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PASAJEROS } from 'src/models/models';
// import { PasajerosSchema } from './schema/pasajeros.schema';
// import { VuelosModule } from 'src/vuelos/vuelos.module';

// @Module({
//   imports: [
//     MongooseModule.forFeatureAsync([{
//       name: PASAJEROS.name ,
//       useFactory: () => PasajerosSchema,
//     },
//   ]),
//   VuelosModule,
//   ],
  
//   controllers: [PasajerosController],
//   providers: [PasajerosService],
//   exports : [PasajerosService],
// })
// export class PasajerosModule {}
import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAJEROS } from 'src/models/models';
import { PasajerosSchema } from './schema/pasajeros.schema';
import { VuelosModule } from 'src/vuelos/vuelos.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASAJEROS.name,
        useFactory: () => PasajerosSchema,
      },
    ]),
    VuelosModule,
  ],
  controllers: [PasajerosController],
  providers: [PasajerosService],
  exports: [PasajerosService], // Si deseas exportar el servicio para que esté disponible en otros módulos
})
export class PasajerosModule {}
