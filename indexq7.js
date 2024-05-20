const http=require('http');

const server= http.createServer(function(req,res){
    if(req.url='/'){
        res.write("<h1>\"I Am Happy To Learn Full Stack Web Development From PW Skills!\"</h1>");
    }
    res.end();
});

server.listen(5015);
console.log("Server running on port 5015");