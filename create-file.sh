#!/bin/bash

# File size in MB
FILE_SIZE_MB=200

TIME_STAMP=$(date +"%Y-%m-%d_%H-%M-%S")
# Output filename
OUTPUT_FILE="$FILE_SIZE_MB-MB-file$TIME_STAMP.txt"


# Choose the method (dd or fallocate - choose one)
METHOD="dd" # or "fallocate"

if [[ "$METHOD" == "dd" ]]; then
  dd if=/dev/zero bs=1M count="$FILE_SIZE_MB" of="$OUTPUT_FILE" conv=notrunc
elif [[ "$METHOD" == "fallocate" ]]; then
  fallocate -l "$FILE_SIZE_MB"M "$OUTPUT_FILE"
  # Fill with a single character to make it a valid text file
  head -c 1 /dev/urandom > "$OUTPUT_FILE" 
else
  echo "Invalid method. Please choose 'dd' or 'fallocate'."
  exit 1
fi

echo "Text file '$OUTPUT_FILE' created with $FILE_SIZE_MB MB of data."