import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AeropuertosDTO } from './dto/aeropuertos.dto';
import { AeropuertosService } from './aeropuertos.service';
@ApiTags()
@Controller('api/v1/aeropuertos')
export class AeropuertosController {
    constructor(private readonly aeropuertosService: AeropuertosService) {}

    @Post()
    insertar( @Body() aeropuertosDTO: AeropuertosDTO){
        return this.aeropuertosService.insertar(aeropuertosDTO);
    
    }
    @Get()
    todos(){
        return this.aeropuertosService.todos();
    }
    @Get(':id')
    uno(@Param('id')  id: string){
        return this.aeropuertosService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() aeropuertosDTO: AeropuertosDTO){
        return this.aeropuertosService.actualizar(id, aeropuertosDTO );
    }
    @Delete(':id')
    eliminar(@Param('id') id: string){
        return this.aeropuertosService.eliminar(id);
    } 
}
