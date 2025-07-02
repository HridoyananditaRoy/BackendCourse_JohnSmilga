//fs modules-> async
//outflow the task and then start next one right away

const {readFile, writeFile} = require('fs');

//run callback when we're done
//we have the read file fn
//without utf8 we cant read as it wont be encoded
readFile('./context/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return; 
    }
   // console.log(result);

   const first = result; //first res will get in first
   readFile('./context/sec.txt','utf8', (err,result)=>{
     if(err){
        console.log(err);
        return; 
    } //we read first.txt data and get in sec
    const sec = result;
    writeFile('./context/result-async.txt',
        `Here is the res: ${first}, ${sec}`
    , (err, result)=>{ //if no error, we create another file and get the res there
        if(err){
        console.log(err);
        return; 
    }
        console.log(result);
        //Our result:--------------------------------
        //Here is the res: Hello, this is sec text file, 
        // Hello, this is sec text file
    })
   })
})
