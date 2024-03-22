import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class AeropuertosDTO{
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo es obligacion'})
    @IsString()
    readonly ciudad: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo es obligacion'})
    @IsString()
    readonly pais: string;
}