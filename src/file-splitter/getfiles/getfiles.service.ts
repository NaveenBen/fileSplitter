import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class GetfilesService {
   async moveFile(file: string, fromFolder: string, toFolder: string) {
      
        // move file from input to processed
        fs.renameSync
        (
            `${fromFolder}/${file}`,
            `${toFolder}/${file}`,
        );

   }
   async getFiles(dir:string): Promise<string[]> {
        // from output directory get all files and return
        return await fs.promises.readdir(dir);
    }
}