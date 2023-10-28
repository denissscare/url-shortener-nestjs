import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UrlCreationAtrs {
  url: string;
  alias: string;
}
@Table({ tableName: 'urls' })
export class Url extends Model<Url, UrlCreationAtrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  url: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  alias: string;
}
