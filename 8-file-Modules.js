//fs modules

const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./context/first.txt','utf8');
const sec = readFileSync('./context/sec.txt','utf8');

console.log(first, sec);

writeFileSync('./context/result-text.txt',
    `Here is the result:
     ${first}, ${sec}`, 
     {flag: 'a'}
    )