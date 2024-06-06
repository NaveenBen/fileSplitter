import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class SplitfileService {
  async splitFile(
    fileName: string,
    size: number,
    outputDir: string,
    inputDir: string,
    chunkPrefix: string,
  ): Promise<string> {
    // split the file into chunks of size in the output dir and return the chunk names created
    return new Promise((resolve, reject) => {
      exec(
        `split -b ${size} ${inputDir}/${fileName} ${outputDir}/${fileName}.${chunkPrefix}`,
        (error, stdout, stderr) => {
          if (error) {
            reject(stderr);
          } else {
            resolve(stdout);
          }
        },
      );
    });
  }
}
