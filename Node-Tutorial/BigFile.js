
const {writeFileSync} = require('fs');
for(let i = 0; i < 10000; i++){
    writeFileSync('./context/bigFile.txt', `Hello World ${i}\n`, {flag: 'a'});
}