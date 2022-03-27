const http = require('http')
let requestCount = 0

const server = http.createServer((request, response) => {
    // requestCount = requestCount + 1
    requestCount ++
    response.write(`${requestCount}`)
    switch (request.url) {
        case '/':
        case '/courses':
            response.write(' FRONT + BACK')
            break
        case '/students':
            response.write(' STUDENTS')
            break
        default:
            response.write(' 404 not found')
    }
    response.end() //если не написать - будет постоянный статус pending И не вернется Response
})

server.listen(3003)