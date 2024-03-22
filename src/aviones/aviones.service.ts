import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AVIONES } from 'src/models/models';
import { IAviones } from './aviones.interface';
import { AvionesDTO } from './dto/aviones.dto';

@Injectable()
export class AvionesService {
    constructor(
        @InjectModel(AVIONES.name) private readonly model: Model<IAviones>
    ){}

    async insertar(avionesDTO: AvionesDTO): Promise<IAviones>{
        const nuevoavion = new this.model(avionesDTO);
        return await nuevoavion.save();
    }
    async todos(): Promise<IAviones[]>{
        return await this.model.find();
    }
    async uno(id: string): Promise<IAviones>{
        return await this.model.findById(id);
    }
    async actualizar(id: string, avionesDTO: AvionesDTO): Promise<IAviones>{
        return await this.model.findByIdAndUpdate(id, avionesDTO, {new: true});
    }
    async eliminar(id: string){
     await this.model.findByIdAndDelete(id);
     return { status: HttpStatus.OK, message: 'Eliminado' };
    }
}
