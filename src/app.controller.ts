import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getHello2(): object {
    return { hello: 'world' };
  }

  @Get('/foo')
  getHello3(): object {
    return { hello: 'world', foo: 'bar' };
  }
}
