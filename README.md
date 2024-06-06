# File Splitter to Manager Larger files Easily

## Tech Stack
- NodeJs [Runtime]
- TypeScript
- NestJs [Framework]
- Linux [Operating System]
  - split [utility to split files]
  - sha256sum [utility to check file integrity]
  - rm [utility to delete file]
## Requirements
- Develop a Node.js application that monitors an input folder for new files every 5 minutes.
- Every File found in the input folder should be converted/split into multiple chunks based on size (These chunks would be of 10mb) and stored in an output folder using Linux commands within the Node Application.
- If a file is already processed, it should not be processed again.
- As soon as the conversion is done, Application should compare the original file and the chunks to check if any data is lost during the conversion and print the output.

## Instructions to run locally
```sh
$ npm ci
```
above command will install all the nessary packages for the nodejs application

```sh   
$ npm run start
```
above command will start the application

## Improvements Suggested
- Implement Queue for each time new files are identified in the input dir and move them to processing dir
- add worker to handle file-split-e2e