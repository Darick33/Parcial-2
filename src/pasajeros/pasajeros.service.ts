import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASAJEROS } from 'src/models/models';
import { IPasajeros } from './pasajeros.interface';
import { PasajerosDTO } from './dto/pasajeros.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class PasajerosService {
    constructor(
        @InjectModel(PASAJEROS.name) private readonly model:Model<IPasajeros>
    ) {}
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
      }
    async insertar(pasajerosDTO: PasajerosDTO): Promise<IPasajeros>{
        const hash = await this.hashPassword(pasajerosDTO.contrasenia);
        const nuevopasajero = new this.model({ ...pasajerosDTO, contrasenia: hash });
        return await nuevopasajero.save();
    }
    async todos(): Promise<IPasajeros[]>{
        return await this.model.find();
    }
    async uno(id: string): Promise<IPasajeros>{
        return await this.model.findById(id);
    }
    async actualizar(id: string, pasajerosDTO: PasajerosDTO): Promise<IPasajeros>{
        return await this.model.findByIdAndUpdate(id, pasajerosDTO, {new: true});
    }
    async eliminar(id: string){
     await this.model.findByIdAndDelete(id);
     return { status: HttpStatus.OK, message: 'Eliminado PASAJEROS' };
    }
    async insertarvuelo(
        pasajeroId: string,
        vuelosId: string,
    
    ): Promise<IPasajeros>{
        return await this.model
            .findByIdAndUpdate(
                pasajeroId,
                { $addToSet: { 
                    vuelos: vuelosId,
                } },
                { new: true },
            )
            .populate('vuelos');
        }
        async BuscarporCorro(correo: string){
            return await this.model.findOne({correo: correo});
          
          }
          async VerificarContrasenia(contrasenia: string, contraseniaDB: string){
            return await bcrypt.compare(contrasenia, contraseniaDB);
          }
       
    
    

}
