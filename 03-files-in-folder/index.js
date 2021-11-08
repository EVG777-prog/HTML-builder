const fs = require('fs');
const path = require('path');
const { stat } = require('fs');


const adressDir = __dirname + '\\secret-folder';

fs.readdir(adressDir, (err, data) => {
    for (let i of data) {
        const fileFullName = adressDir + "\\" + i;
        stat(fileFullName, (err, stats) => {
            if (err) throw err;
            if (!stats.isDirectory()) {
                const fileSize = Math.trunc(stats.size / 1024 * 1000) / 1000 + 'Kb';
                const fileName = path.parse(i).name;
                const fileExt = path.extname(i);
                console.log(fileName + "   " + fileExt + "  " + fileSize);
            }
        });
    }
});