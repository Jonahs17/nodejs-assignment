const fs=require('fs');

fs.readFile('./nodejs assgn/nodejs_architecture.txt',function(err,data){
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("Contents of the file are: ",data.toString());
    }
})