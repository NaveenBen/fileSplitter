import { NestFactory } from '@nestjs/core';
import { FileSplitterModule } from './file-splitter/file-splitter.module';

async function bootstrap() {
  const app = await NestFactory.create(FileSplitterModule);
  await app.init();
}
bootstrap();
