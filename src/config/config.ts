import { IConfig } from './interfaces/config.interface';

export function config(): IConfig {
  const testing = process.env.NODE_ENV !== 'production';
  const bucketBase = `${process.env.BUCKET_REGION}.${process.env.BUCKET_HOST}.com`;

  return {
    port: parseInt(process.env.PORT, 10),
    playground: process.env.PLAYGROUND === 'true',
    url: process.env.URL,
    jwt: {
      private: process.env.JWT_PRIVATE_KEY,
      public: process.env.JWT_PUBLIC_KEY,
      cookieRefresh: process.env.JWT_COOKIE_REFRESH_NAME,
      access: {
        time: process.env.JWT_EXPIRES_IN,
        cookieName: process.env.JWT_COOKIE_NAME,
      },
      refresh: {
        time: process.env.JWT_REFRESH_EXPIRES_IN,
        cookieName: process.env.JWT_COOKIE_REFRESH_NAME,
      },
    },
  };
}
