import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DestinasiModule } from './destinasi/destinasi.module.js';

@Module({
  imports: [DestinasiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
