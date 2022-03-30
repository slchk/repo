const fs = require('fs-extra');

fs.ensureDir('./firstfolder', () => {
    console.log('Folder is created');
    fs.ensureFile('./firstfolder/file.txt');
    fs.ensureDir('./secondfolder');
    fs.move('./firstfolder/file.txt','./secondfolder/file.txt');
    fs.remove('./secondfolder/file.txt');
    fs.remove('./firstfolder');
    fs.remove('./secondfolder');
    console.log('Done')
})

