< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    link rel = "stylesheet"
href = "bundle.css" >
    <
    title > Solar system < /title> <
    /head>

<
body >
    <
    div class = "solar-syst" >
    <
    div class = "sun" > < /div> <
    div class = "mercury" > < /div> <
    div class = "venus" > < /div> <
    div class = "earth" > < /div> <
    div class = "mars" > < /div> <
    div class = "jupiter" > < /div> <
    div class = "saturn" > < /div> <
    div class = "uranus" > < /div> <
    div class = "neptune" > < /div> <
    div class = "pluto" > < /div> <
    div class = "asteroids-belt" > < /div> <
    /div> <
    /body>

<
/html> } else {
fs.appendFile(nameFile, answer + '\n', function(error) {
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