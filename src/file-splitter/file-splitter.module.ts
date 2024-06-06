import { Module } from '@nestjs/common';
import { FileSplitterService } from './file-splitter.service';
import { ScheduleModule } from '@nestjs/schedule';
import { GetfilesService } from './getfiles/getfiles.service';
import { SplitfileService } from './splitfile/splitfile.service';
import { CheckfilesService } from './checkfiles/checkfiles.service';
import * as fs from 'fs';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  providers: [FileSplitterService, GetfilesService, SplitfileService, CheckfilesService]
})
export class FileSplitterModule {
  onModuleInit() {
    fs.mkdir('output', { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.mkdir('input', { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.mkdir('input/processed', { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
}
