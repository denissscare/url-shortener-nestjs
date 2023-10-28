import { Controller, Get, Param, Res } from '@nestjs/common';
import { UrlService } from './url/url.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Url } from './url/url.model';
import { Response } from 'express';

@Controller('')
export class AppController {
  constructor(private urlService: UrlService) {}

  @ApiOperation({ summary: 'Redirect on URL by URL-alias' })
  @ApiResponse({ status: 200, type: Url })
  @Get('/:alias')
  async redirect(@Param('alias') alias: string, @Res() res: Response) {
    const link = await this.urlService.getUrl(alias);
    return res.redirect(301, link.url);
  }
}
