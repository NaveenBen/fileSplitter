import { Injectable,Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class FileSplitterService {
    private readonly logger = new Logger(FileSplitterService.name);

    @Interval(5000) // every 5 seconds
    handleCron() {
        this.logger.debug('File Splitter Service is called every 5 seconds');
    }
}
