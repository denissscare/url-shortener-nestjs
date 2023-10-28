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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Url } from './url.model';

@ApiTags('Url API')
@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}
  @ApiOperation({ summary: 'Save URL on database' })
  @ApiResponse({ status: 201, type: Url })
  @Post()
  save(@Body() urlDto: SaveUrlDto) {
    return this.urlService.saveUrl(urlDto);
  }

  @ApiOperation({ summary: 'Get all urls from database' })
  @ApiResponse({ status: 200, type: [Url] })
  @Get()
  getAll() {
    return this.urlService.getAllUrl();
  }

  @ApiOperation({ summary: 'Get once URL by alias from database' })
  @ApiResponse({ status: 200, type: Url })
  @Get('/:alias')
  get(@Param('alias') alias: string) {
    return this.urlService.getUrl(alias);
  }

  @ApiOperation({ summary: 'Delete URL by alias' })
  @ApiResponse({ status: 200, type: Url })
  @Delete('/:alias')
  delete(@Param('alias') alias: string) {
    return this.urlService.deleteUrl(alias);
  }

  @ApiOperation({ summary: 'Redirect on URL by URL-alias' })
  @ApiResponse({ status: 200, type: Url })
  @Get('/:alias/go')
  async redirect(@Param('alias') alias: string, @Res() res: Response) {
    const link = await this.urlService.getUrl(alias);
    return res.redirect(301, link.url);
  }
}
