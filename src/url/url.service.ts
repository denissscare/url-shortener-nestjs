import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Url } from './url.model';
import { SaveUrlDto } from './dto/save-url.dto';
import { randomAlias } from '../lib/random-alias';

const ALIAS_LEN = 6;

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url) private urlRepo: typeof Url) {}

  async saveUrl(dto: SaveUrlDto) {
    const url = await this.urlRepo.create(dto);
    if (!url.alias) {
      url.alias = randomAlias(ALIAS_LEN);
    }
    await url.save();
    return url;
  }
  async getUrl(alias: string) {
    return await this.urlRepo.findOne({
      where: { alias },
      include: { all: true },
    });
  }

  async getAllUrl() {
    return await this.urlRepo.findAll({ include: { all: true } });
  }

  async deleteUrl(alias: string) {
    return await this.urlRepo.destroy({
      where: { alias },
    });
  }
}
