import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { VuelosService } from './vuelos.service';
  import { VuelosDTO } from './dto/vuelos.dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AvionesService } from 'src/aviones/aviones.service';
import { AeropuertosService } from 'src/aeropuertos/aeropuertos.service';
  @ApiTags('vuelos')
  @Controller('api/v1/vuelos')
  export class VuelosController {
    constructor(
      private readonly vuelosService: VuelosService,
      private readonly avionesService: AvionesService,
      private readonly aeropuertosService: AeropuertosService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea Vuelos' })
    insertar(@Body() vuelosDTO: VuelosDTO) {
      return this.vuelosService.insertar(vuelosDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona todos los Vuelos' })
    todos() {
      return this.vuelosService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.vuelosService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() vuelosDTO: VuelosDTO) {
      return this.vuelosService.actualizar(id, vuelosDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.vuelosService.eliminar(id);
    }
    @Post(':vueloId/aviones/:avionesId/aeropuerto-entrada/:aeropuertosIdE/aeropuerto-salida/:aeropuertosIdS')
    async agregarDatosvuelo(
      @Param('vueloId') vueloId: string,
      @Param('avionesId') avionesId: string,
      @Param('aeropuertosIdE') aeropuertosIdE: string,
      @Param('aeropuertosIdS') aeropuertosIdS: string,
    ) {
      const aviones = await this.avionesService.uno(avionesId);
      const aeropuertoE = await this.aeropuertosService.uno(aeropuertosIdE);
      const aeropuertoS = await this.aeropuertosService.uno(aeropuertosIdS);
      if (!aviones && !aeropuertoE && !aeropuertoS)
        throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
      return this.vuelosService.insertarDatosvuelo(vueloId, avionesId, aeropuertosIdE,aeropuertosIdS );
    }
  }
  