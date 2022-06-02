import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from './config/interfaces/config.interface';

@Injectable()
export class AppService {
  private readonly cookieName: string;

  constructor(private readonly configService: ConfigService<IConfig>) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.cookieName = this.configService.get('jwt')!;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
