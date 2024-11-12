import { Injectable } from '@nestjs/common';
import { dataSource } from 'ormconfig';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async checkHealth(): Promise<any> {
    try {
      await dataSource.query('SELECT 1');
      return 'Application is running successfully!';
    } catch (error) {
      throw new Error(error);
    }
  }
}
