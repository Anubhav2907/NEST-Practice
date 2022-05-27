import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

  @Get('/cats')
  getCats(): string {
    return this.catService.getCats();
  }

  @Post('/cats')
  async addCats(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.catService.addCats();
  }

  @Get('/cats/:id')
  getCatById(@Param('id') id: string): string {
    console.log('here')
    return `this action returns ${id} cat`
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

}
