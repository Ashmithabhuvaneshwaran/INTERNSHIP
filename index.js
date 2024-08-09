const file=require('fs') 
let filedata=file.readFileSync('data.txt').toString()
console.log(filedata);