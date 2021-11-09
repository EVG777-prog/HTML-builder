const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


const fileName = __dirname + '\\text.txt';

// create file - text.txt
fs.writeFile(fileName, "", function(error) {
    if (error) throw error; // если возникла ошибка
    console.log("File created.");
});


function readConsole() {
    rl.question('', (answer) => {
        if (answer.includes('end')) {
            console.log('Завершаем программу, обнаружен "end".');
            fs.appendFile(fileName, answer + '\n', function(error) {
                if (error) throw error; // если возникла ошибка
            });
            rl.close();
        } else {
            fs.appendFile(fileName, answer + '\n', function(error) {
                if (error) throw error; // если возникла ошибка
                readConsole();
            });
        }
    });
}

readConsole();

process.on('exit', function(code) {
    console.log('Выходим из программы с кодом:', code);
});