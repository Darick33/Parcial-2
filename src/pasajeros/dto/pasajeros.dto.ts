import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PasajerosDTO {
    @ApiProperty()
    @IsNotEmpty({ message : 'Campo Requerido'})
    @IsString()
    readonly nombre : string;
    @ApiProperty()
    @IsNotEmpty({ message : 'Campo Requerido'})
    @IsString()
    readonly correo : string;
    @ApiProperty()
    @IsNotEmpty({ message : 'Campo Requerido'})
    @IsString()
    readonly contrasenia : string;
}