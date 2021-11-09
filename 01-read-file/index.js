const fs = require('fs');
const path = require('path');

const adressFile = path.join(__dirname, 'text.txt');

const stream = new fs.ReadStream(adressFile, { encoding: 'utf-8' });

stream.on('readable', function() {
    let data = stream.read();
    if (data) console.log(data);
});