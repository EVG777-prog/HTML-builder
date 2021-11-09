const process = require('process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const nameFile = path.join(__dirname, 'project-dist', 'bundle.css');

fs.writeFile(nameFile, "", function(error) {
    if (error) throw error; // если возникла ошибка
    console.log("Файл bundle.css создан.");
    readCss();
});

function readCss() {
    fs.readdir(__dirname + "\\styles", (err, data) => {
        for (let i of data) {
            const fileFullName = __dirname + "\\styles\\" + i;
            const fileExt = path.extname(i);

            if (fileExt === '.css') {
                const stream = new fs.ReadStream(fileFullName, { encoding: 'utf-8' });

                stream.on('readable', function() {
                    let data = stream.read();
                    if (data) {
                        fs.appendFile(nameFile, data, function(error) {
                            if (error) throw error; // если возникла ошибка
                        });
                    }
                });
            }

        }
    });
}