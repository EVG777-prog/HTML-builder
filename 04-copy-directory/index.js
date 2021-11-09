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
        copyFiles(adressDir, adressDirNew);
    }
});

function copyFiles(dir, dir2) {
    fs.readdir(dir, (err, data) => {
        for (let i of data) {
            const fileFullName = dir + "\\" + i;
            const fileFullNameNew = dir2 + "\\" + i;
            copyFile(fileFullName, fileFullNameNew, callback);

            function callback(err) {
                if (err) {
                    console.log(`Error copy file ${i}`);
                } else {
                    console.log(`${fileFullName} was copied to ${fileFullNameNew}`);
                }
            }
        }
    });
}

function removeFiles(dir) {
    fs.readdir(dir, (err, data) => {
        for (let i of data) {
            const fileFullName = dir + "\\" + i;
            fs.unlink(fileFullName, (err) => {
                if (err) console.log('Error delete file');
            });
            console.log(`Delete ${i}`);
        }
    });
    copyFiles(adressDir, adressDirNew);
}