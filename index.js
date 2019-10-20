const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello Kubernetes");
    res.end();
});
server.listen(8000,()=>{
    console.log("Server listening on port 8000");
})