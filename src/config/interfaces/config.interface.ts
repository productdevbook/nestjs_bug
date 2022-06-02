import { IBucketData } from './bucket-data.inteface';
import { IEmailConfig } from './email-config.interface';
import { IJwt } from './jwt.interface';

export interface IConfig {
  port: number;
  playground: boolean;
  url: string;
  jwt: IJwt;
}
