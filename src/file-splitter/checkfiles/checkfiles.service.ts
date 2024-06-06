import { Injectable } from '@nestjs/common';
import {exec} from 'child_process';

@Injectable()
export class CheckfilesService {
    async compareOriginalAndChunks(originalFile:string,chunkDir:string,chunkPrefix:string):Promise<boolean>{
        // compare the original file with the chunks in the chunkDir
        // we be using the sha256sum command to compare the files
        // if the original file and the chunks are the same return true else return false
        return new Promise((resolve,reject)=>{
            exec(`sha256sum input/${originalFile} && sha256sum ${chunkDir}/${originalFile}.${chunkPrefix}*`,(error,stdout,stderr)=>{
                if(error){
                    reject(stderr);
                }else{
                    const [originalSum,chunkSum] = stdout.split('\n');
                    const [originalHash] = originalSum.split(' ');
                    const [chunkHash] = chunkSum.split(' ');
                    if(originalHash === chunkHash){
                        resolve(true);
                    }else{
                        resolve(false);
                    }
                }
            })
        });
    }
}
