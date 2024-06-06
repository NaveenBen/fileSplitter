import { Module } from '@nestjs/common';
import { FileSplitterService } from './file-splitter.service';
import { ScheduleModule } from '@nestjs/schedule';
import * as fs from 'fs';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  providers: [FileSplitterService]
})
export class FileSplitterModule {
  onModuleInit() {

    fs.mkdir('output', { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.mkdir('input', { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
}
