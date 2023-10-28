import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class SaveUrlDto {
  @ApiProperty({ example: 'https://exampleUrl.com', description: 'URL' })
  @IsString({ message: 'URL must be a string' })
  @IsNotEmpty({ message: 'URL cant be empty' })
  @IsUrl(undefined, { message: 'URL is not valid.' })
  readonly url: string;

  @IsString({ message: 'Alias must be a string' })
  @ApiProperty({ example: 'AliasForURL', description: 'Alias. Can be empty.' })
  readonly alias: string;
}
