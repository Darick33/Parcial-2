import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AvionesService } from './aviones.service';
import { AvionesDTO } from './dto/aviones.dto';
@ApiTags('aviones')
@Controller('api/v1/aviones')
export class AvionesController {
    constructor(private readonly avionesService: AvionesService) {}

    @Post()
    insertar( @Body() avionesDTO: AvionesDTO){
        return this.avionesService.insertar(avionesDTO);
    
    }
    @Get()
    todos(){
        return this.avionesService.todos();
    }
    @Get(':id')
    uno(@Param('id')  id: string){
        return this.avionesService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() avionesDTO: AvionesDTO){
        return this.avionesService.actualizar(id, avionesDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string){
        return this.avionesService.eliminar(id);
    } 

}
