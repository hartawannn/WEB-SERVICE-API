import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'kamu berhasil mengakses API Wisataku!,tunggu update selanjutnya yaa';
  }
}
