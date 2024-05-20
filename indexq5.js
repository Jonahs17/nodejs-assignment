const fs=require('fs');
fs.unlink('./nodejs assgn/nodejs_architecture.txt',function(err){
    if(err){
        console.log("Error in deleting the file");
    }
    else{
        console.log("File deleted successfully");
    }
})