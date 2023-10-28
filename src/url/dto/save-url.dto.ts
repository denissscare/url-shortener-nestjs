import { ApiProperty } from '@nestjs/swagger';

export class SaveUrlDto {
  @ApiProperty({ example: 'https://exampleUrl.com', description: 'URL' })
  readonly url: string;

  @ApiProperty({ example: 'AliasForURL', description: 'Alias. Can be empty.' })
  readonly alias: string;
}
