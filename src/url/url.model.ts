import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UrlCreationAtrs {
  url: string;
  alias: string;
}
@Table({ tableName: 'urls' })
export class Url extends Model<Url, UrlCreationAtrs> {
  @ApiProperty({ example: 1, description: 'Unique ID for URL' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'https://exampleURL', description: 'URL' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  url: string;

  @ApiProperty({
    example: 'ExampleAliasForURL',
    description: 'Unique alias. Can be empty',
  })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  alias: string;
}
