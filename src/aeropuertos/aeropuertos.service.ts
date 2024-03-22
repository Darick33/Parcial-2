import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AEROPUERTOS } from 'src/models/models';
import { IAeropuertos } from './aeropuertos.inteface';
import { AeropuertosDTO } from './dto/aeropuertos.dto';

@Injectable()
export class AeropuertosService {
    constructor(
        @InjectModel(AEROPUERTOS.name) private readonly model: Model<IAeropuertos>
    ){}
    async insertar(aeropuertosDTO: AeropuertosDTO): Promise<IAeropuertos>{
        const nuevoAeropuerto = new this.model(aeropuertosDTO);
        return await nuevoAeropuerto.save();
    }
    async todos(): Promise<IAeropuertos[]>{
        return await this.model.find();
    }
    async uno(id: string): Promise<IAeropuertos>{
        return await this.model.findById(id);
    }
    async actualizar(id: string, aeropuertosDTO: AeropuertosDTO): Promise<IAeropuertos>{
        return await this.model.findByIdAndUpdate(id, aeropuertosDTO, {new: true});

    }
    async eliminar(id: string){
     await this.model.findByIdAndDelete(id);
     return { status: HttpStatus.OK, message: 'Eliminado' };
    }
}
