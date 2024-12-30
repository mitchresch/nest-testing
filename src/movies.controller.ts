import { Controller, Get, Req } from "@nestjs/common";

@Controller('movies')
export class MoviesController {
  @Get()
  findAll(): string {
    return 'All movies'
  }
}
