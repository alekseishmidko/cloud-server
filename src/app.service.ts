import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllUsers() {
    return [{ key: 'value' }];
  }
}
