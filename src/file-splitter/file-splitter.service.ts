import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { GetfilesService } from './getfiles/getfiles.service';
import { SplitfileService } from './splitfile/splitfile.service';
import { CheckfilesService } from './checkfiles/checkfiles.service';

@Injectable()
export class FileSplitterService {
  private readonly logger = new Logger(FileSplitterService.name);

  constructor(
    private readonly getfilesService: GetfilesService,
    private readonly splitfileService: SplitfileService,
    private readonly checkfilesService: CheckfilesService,
  ) {}

  @Interval(5000) // every 5 seconds
  async handleCron() {
    this.logger.debug('Called when the current second is 45');
    const files = await this.getfilesService.getFiles('input');
    for (const file of files) {
      this.logger.debug(`Splitting file ${file}`);
      const fileSplit = await this.splitfileService.splitFile(
        file,
        // 1KB
        1024,
        'output',
        'input',
        'chunk',
      );
      this.logger.debug(`Splitting file ${file} completed, ${fileSplit}`);
      const isSame = await this.checkfilesService.compareOriginalAndChunks(
        `${file}`,
        'output',
        'chunk',
      );
        if (isSame) {
            this.logger.debug(`File ${file} was split successfully`);
            // if the file was split successfully, add file to the processed folder
        } else {
            this.logger.error(`File ${file} was not split successfully`);
        }
    }
  }
}
