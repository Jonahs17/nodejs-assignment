const fs=require('fs');
const data="Node.js ecosystem thrives on its vibrant community, fostering innovation and collaboration. Its lightweight and scalable nature makes it ideal for building real-time applications and microservices. Through its extensive collection of modules and frameworks, Node.js empowers developers to create diverse applications spanning web servers, APIs, and more."
fs.appendFile('./nodejs assgn/nodejs_architecture.txt',data,function(err){
    if(err){
        console.log("Error in appending");
    }
    else{
        console.log("Data appended successfully");
    }
})