import { Controller, Get, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('movies')
export class MoviesController {
  @Get()
  findAll(): string {
    return 'All movies'
  }
}
