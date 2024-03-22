import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class AvionesDTO{
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo es obligacion'})
    @IsString()
    readonly modelo: string;
}