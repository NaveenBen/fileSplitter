import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class GetfilesService {
   async getFiles(dir:string): Promise<string[]> {
        // from output directory get all files and return
        return await fs.promises.readdir(dir);
    }
}