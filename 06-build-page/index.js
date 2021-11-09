const fs = require('fs');
const path = require('path');
const { stat, copyFile, constants } = require('fs');


const adressDirNew = path.join(__dirname, 'project-dist');

fs.mkdir(adressDirNew, (err) => {
    if (err) {
        console.log('Directory already exsist');
        removeFolder(adressDirNew);
        fs.mkdir(adressDirNew, (err) => {
            if (err) console.log('Directory already exsist2');
        });
    }

    fs.mkdir(adressDirNew + '\\assets', (err) => {
        if (err) {
            console.log('Directory already exsist');
            removeFolder(adressDirNew + '\\assets');
        }
        copyFiles(__dirname + '\\assets', adressDirNew + '\\assets');

    });

});


function copyFiles(dir, dir2) {
    fs.readdir(dir, (err, data) => {
        console.log(data);
        for (let i of data) {
            const fileFullName = dir + "\\" + i;
            const fileFullNameNew = dir2 + "\\" + i;

            stat(fileFullName, (err, stats) => {
                if (err) throw err;
                if (!stats.isDirectory()) {
                    console.log(`This is NOT a directory - ${fileFullName}`);
                    copyFile(fileFullName, fileFullNameNew, callback);
                } else {
                    console.log(`This is a directory - ${fileFullName}`);
                    fs.mkdir(fileFullNameNew, (err) => {
                        if (err) console.log('Directory already exsist');
                        copyFiles(fileFullName, fileFullNameNew);
                    });
                }

                function callback(err) {
                    if (err) {
                        console.log(`Error copy file ${i}`);
                    } else {
                        console.log(`${fileFullName} was copied to ${fileFullNameNew}`);
                    }
                }
            });
        }
    });
}

function removeFolder(dir) {
    fs.rmdir(dir, err => {
        if (err) {
            fs.readdir(dir, (err, data) => {
                for (let i of data) {
                    const fileFullName = dir + "\\" + i;
                    stat(fileFullName, (err, stats) => {
                        if (err) throw err;
                        if (stats.isDirectory()) {
                            removeFolder(fileFullName);
                        } else {
                            fs.unlink(fileFullName, (err) => {
                                if (err) console.log('Error delete file');
                            });
                            console.log(`Delete ${i}`);
                        }
                    });
                }
            });
            removeFolder(dir);
        }
    });
    console.log('Папка успешно удалена');
}