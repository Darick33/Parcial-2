import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class VuelosDTO{
    @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha;
}
