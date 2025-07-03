//Streams
// Streams are a way to read or write data in chunks, rather than loading the entire file into memory at once.
// This is useful for large files or when we want to process data as it is being read

//Types of Streams:
// 1. Readable Streams: Used to read data from a source (e.g., file, network, etc.)
// 2. Writable Streams: Used to write data to a destination (e.g., file, network, etc.)
// 3. Duplex Streams: Can be both readable and writable (e.g., TCP sockets)
// 4. Transform Streams: A type of duplex stream that can modify the data
//  as it is being read or written (e.g., zlib compression)   

const {createReadStream} = require('fs');
//createReadStream is a method that creates a readable stream from a file
//It takes the file path as an argument and returns a readable stream

const stream = createReadStream('./context/bigFile.txt',
    {highWaterMark: 90000, encoding: 'utf8'});
//It creates a readable stream from the file bigFile.txt
//The stream will read the file in chunks, rather than loading the entire file
//  into memory at once
stream.on('data',(result)=>{
    //on is a method that listens for events on the stream
    console.log(result); //result is a buffer
    //we can convert the buffer to a string using toString()
    console.log(result.toString());
})

stream.on('error',(err)=>{
    console.log(err);
    //error event is emitted when there is an error reading the file
    //we can listen for the error event using the on method
})

