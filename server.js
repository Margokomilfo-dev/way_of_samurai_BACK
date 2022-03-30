const http = require('http')
const path = require('path')
const fs = require('fs');

let requestCount = 0

const server = http.createServer((request, response) => {
    // requestCount = requestCount + 1
    let icon

    fs.readFile(path.join(__dirname,'favicon.ico'),
        (err, iconFile) => {
            if (true) {
                icon = iconFile;
                response.end(icon);
            } else {
                response.statusCode = 404;
                response.end();
            }
        });


    switch (request.url) {
        case '/':
        case '/courses':
            requestCount ++
            response.write(`${requestCount}`)
            response.write(' FRONT + BACK')
            response.end();
            break
        case '/students':
            requestCount ++
            response.write(`${requestCount}`)
            response.write(' STUDENTS')
            response.end();
            break
        case '/favicon.ico':
            response.statusCode = 200
            response.setHeader('Content-Type', 'image/x-icon')
            break;
        default:
            response.write(' 404 not found')
            response.end();
    }
    // response.end() //если не написать - будет постоянный статус pending И не вернется Response
})

server.listen(3003)