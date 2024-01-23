fs = require('node:fs')

zlib = require('node:zlib')  //file ko zip me change karta h 
gzip = zlib.createGzip()
readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8',highWaterMark: 6})


readableStream.pipe(gzip).pipe(fs.WriteStream("./ald.txt.gz"))


//readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8'})



// writeableStream = fs.createWriteStream('./allahabad.txt')

// readableStream.pipe(writeableStream)     //write karne ka first method 
// console.log("Data is being written to allahabad.txt file")

//readableStream.on("data", (chunk) =>    //write karne ka second method
//{
//    console.log(chunk);
//  writeableStream.write(chunk)
//}
//);

//console.log(readableStream)