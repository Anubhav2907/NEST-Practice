import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHello(): string {
    return 'Hello World!';
  }
  getCats(): string {
    return 'Returning all the cats';
  }
  addCats(): string {
    return 'Returning all the cats';
  }
}
