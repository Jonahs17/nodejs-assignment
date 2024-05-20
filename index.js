const fs=require('fs');
const data="The architecture of Node.js revolves around its event-driven, non-blocking I/O model, allowing for efficient handling of concurrent requests. It utilizes the V8 JavaScript engine for executing code, while its event loop manages asynchronous operations, enhancing scalability and responsiveness. Modules such as HTTP, File System, and Stream facilitate robust networking, file system operations, and data streaming, contributing to Node.js's versatile architecture."
fs.writeFile('./nodejs assgn/nodejs_architecture.txt',data,function(err){
    if(err){
        console.log("Error in writing");
    }
    else{
        console.log("Data written successfully");
    }
})