import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosDTO } from './dto/pasajeros.dto';
import { ApiTags } from '@nestjs/swagger';
import { VuelosService } from 'src/vuelos/vuelos.service';
@ApiTags('Pasajeros')
@Controller('api/v1/pasajeros')
export class PasajerosController {
    constructor(private readonly pasajerosService: PasajerosService, private readonly vuelosService:VuelosService){}

    @Post()
    insertar(@Body() pasajerosDTO: PasajerosDTO){
        return this.pasajerosService.insertar(pasajerosDTO);
    
    }
    @Get()
    todos(){
        return this.pasajerosService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string){
        return this.pasajerosService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() pasajerosDTO: PasajerosDTO){
        return this.pasajerosService.actualizar(id, pasajerosDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string){
        return this.pasajerosService.eliminar(id);
    }
    @Post(':pasajeroId/vuelos/:vuelosId')
    async agregarvuelo(
        @Param('pasajeroId') pasajeroId: string,
        @Param('vuelosId') vuelosId: string,
    ) {
        const pasajero = await this.pasajerosService.uno(pasajeroId);
        const vuelo = await this.vuelosService.uno(vuelosId);
        if (!pasajero && !vuelo)
          throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
        return this.pasajerosService.insertarvuelo(pasajeroId, vuelosId);
    }
    
}
