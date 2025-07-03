const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our home page");
    }
    if(req.url === '/about'){

        //Blocking Code
        //We should alawys set up our code asynchronously
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("Here is our short history");
    }
    if(req.url === '/error'){
        res.end("<h1>Oops! Something went wrong</h1>");
    }
});
server.listen(5000,()=>{
    console.log("Server is listening on port 5000...");
});