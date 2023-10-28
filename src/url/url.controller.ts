import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { SaveUrlDto } from './dto/save-url.dto';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}
  @Post()
  save(@Body() urlDto: SaveUrlDto) {
    return this.urlService.saveUrl(urlDto);
  }

  @Get()
  getAll() {
    return this.urlService.getAllUrl();
  }

  @Get('/:alias')
  get(@Param('alias') alias: string) {
    return this.urlService.getUrl(alias);
  }
  @Delete('/:alias')
  delete(@Param('alias') alias: string) {
    return this.urlService.deleteUrl(alias);
  }

  @Get('/:alias/go')
  async redirect(@Param('alias') alias: string, @Res() res: Response) {
    const link = await this.urlService.getUrl(alias);
    return res.redirect(301, link.url);
  }
}
