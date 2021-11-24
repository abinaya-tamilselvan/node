const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('it is our short story')
    }
    res.end(`
    <h1>oops!!</h1>
    <p>We cant find the page what you are looking for</p>
    <a href="/">Back home</a>`)
})
server.listen(3000)