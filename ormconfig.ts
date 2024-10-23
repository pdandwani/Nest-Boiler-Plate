import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: process.env.DB_DIALECT as any, //  adding any because type is an enum and we are expecting the type from env
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.{.ts,.js}'],
  migrations: ['dist/src/migrations/*.js'], //  example to create a migration: npm run migration:create --name=add-uuid-extension
};

export const dataSource = new DataSource(config);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
