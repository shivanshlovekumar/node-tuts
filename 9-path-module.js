//Path Module Implementation
const path = require('path');

// path of file
const filePath = path.join('/content','subfolder','text.txt');

//Absoulte path of file
const base = path.basename(filePath);
//console.log(base);

//Absolute path of file

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);
