import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class CheckfilesService {
  async compareOriginalAndChunks(
    originalFile: string,
    chunkDir: string,
    chunkPrefix: string,
  ): Promise<boolean> {
    // compare original file with chunks

    // first get the original file sha256sum
    // reconstruct the file from chunks and get the sha256sum

    // compare the two sha256sums

    // if they are the same return true else false

    return new Promise((resolve, reject) => {
      exec(`sha256sum input/${originalFile}`, (error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          reject(false);
        }
        const originalSha256sum = stdout.split(' ')[0];
        exec(
          `cat ${chunkDir}/${originalFile}.${chunkPrefix}* > ${originalFile}_reconstructed && sha256sum ${originalFile}_reconstructed`,
          (error, stdout) => {
            if (error) {
              console.error(`exec error: ${error}`);
              reject(false);
            }
            const reconstructedSha256sum = stdout.split(' ')[0];
            const result = originalSha256sum === reconstructedSha256sum;
            // delete the reconstructed file
            exec(`rm ${originalFile}_reconstructed`, (error) => {
              if (error) {
                console.error(`exec error: ${error}`);
                reject(false);
              }
            });

            resolve(result);
          },
        );
      });
    });
  }
}
