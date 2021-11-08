const fs = require('fs');
const path = require('path');
const { copyFile, constants } = require('fs');

const adressDir = __dirname + '\\files';
const adressDirNew = __dirname + '\\files-copy';

fs.mkdir(adressDirNew, (err) => {
    if (err) {
        console.log('Directory already exsist');
        removeFiles(adressDirNew);
    } else {
        copyFiles();
    }
});

function copyFiles() {
    fs.readdir(adressDir, (err, data) => {
        for (let i of data) {
            const fileFullName = adressDir + "\\" + i;
            const fileFullNameNew = adressDirNew + "\\" + i;
            copyFile(fileFullName, fileFullNameNew, callback);

            function callback(err) {
                if (err) throw err;
                console.log(`${fileFullName} was copied to ${fileFullNameNew}`);
            }
        }
    });
}

function removeFiles(dir) {
    fs.readdir(dir, (err, data) => {
        for (let i of data) {
            const fileFullName = dir + "\\" + i;
            fs.unlink(fileFullName, (err) => {
                if (err) throw err;
            });
            console.log(`Delete ${i}`);
        }
    });
    copyFiles();
}