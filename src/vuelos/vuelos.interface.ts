import { IAeropuertos } from "src/aeropuertos/aeropuertos.inteface";
import { IAviones } from "src/aviones/aviones.interface";
import { IPasajeros } from "src/pasajeros/pasajeros.interface";

export interface IVuelos extends Document {
  fecha: Date;
  aeropuertoE: IAeropuertos;
  aeropuertoS: IAeropuertos;
  aviones: IAviones;
  }