const {readFile, writeFile} = require('fs').promises; //using promises to handle asynchronous code
// const {readFile, writeFile} = require('fs'); //using callbacks to handle asynchronous code
// const util = require('util');
// const readFilePromise = util.promisify(readFile); //convert readFile to a promise based function
// const writeFilePromise = util.promisify(writeFile); //convert writeFile to a promise based function

//Using async/await
const start = async() =>{
    try{
        const first = await readFilePromise('./context/first.txt','utf8');
        const sec = await readFilePromise('./context/sec.txt','utf8');
        await writeFilePromise('./context/result-async.txt',
            `This is awesome: ${first}, ${sec}`,
               { flag:'a'}); //flag 'a' to append to the file
        //writeFilePromise returns a promise, so we can use await to wait for it to complete
        //if we use await, the code will wait for the writeFile to complete
        //if we dont use await, the code will not wait for the writeFile to complete 
        //and will continue executing the next line of code
        //if we use await, the code will wait for the readFile to complete
        //if we dont use await, the code will not wait for the readFile to complete
        //and will continue executing the next line of code   
         console.log(first, sec);
    }
    catch(err){
        console.log(err);
    }
    
}

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile('./context/first.txt', 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

//Using Promises

// getText('./context/first.txt')
//     .then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})


//CallBacks-

// readFile('.context/first.txt','utf8',(err,data)=>{
//     if(err){
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

//if we want to read multiple files, we can use promises to handle asynchronous code in a more readable way
//we can use async/await to handle asynchronous code in a more readable way

