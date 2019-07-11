const fs = require('fs');
const path = require('path');
// This script is to be used if there are descrpencies in any of the master catalog backups,
// ,or instance, if number of files don't match up.

// use "ls -R > wav_list.txt" in bi_music/wav to generate list of files.
// then run this script. copy the output to wav_no_ext.txt
// repeat above steps for mp3s and aifs.
// then run "diff wav_no_ext.txt mp3_no_ext.txt" and it will spit out the differences.

const filePath = path.join(__dirname, 'source/wav_list.txt');

let songNames = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(filePath)
});

lineReader.on('line', function (line) {
  if(line.includes('DLM - ')){
    // console.log(line.split('.')[0]);
    songNames.push(line.split('.')[0])
  }
});

lineReader.on('close', () => {
  songNames.sort();
  songNames.forEach(song => {
    console.log(song)
  })
})
