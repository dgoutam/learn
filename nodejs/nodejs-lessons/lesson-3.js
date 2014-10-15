/**
 * Created by goutamd on 10/15/14.
 */
/*
 To perform a filesystem operation you are going to need the fs module from the N
 ode core library. To load this kind of module, or any other "global" module, use
 the following incantation:

 var fs = require('fs')

 Now you have the full fs module available in a variable named fs.

 All synchronous (or blocking) filesystem methods in the fs module end with 'Sync
 '. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This met
 hod will return a Buffer object containing the complete contents of the file.

 Documentation on the fs module can be found by pointing your browser here:
 file://C:\Users\goutamd\AppData\Roaming\npm\node_modules\learnyounode\node_api
 doc\fs.html

 Buffer objects are Node's way of efficiently representing arbitrary arrays of da
 ta, whether it be ascii, binary or some other format. Buffer objects can be conv
 erted to strings by simply calling the toString() method on them. e.g. var str =
 buf.toString().

 Documentation on Buffers can be found by pointing your browser here:
 file://C:\Users\goutamd\AppData\Roaming\npm\node_modules\learnyounode\node_api
 doc\buffer.html

 If you're looking for an easy way to count the number of newlines in a string, r
 ecall that a JavaScript String can be .split() into an array of substrings and t
 hat '\n' can be used as a delimiter. Note that the test file does not have a new
 line character ('\n') at the end of the last line, so using this method you'll e
 nd up with an array that has one more element than the number of newlines.

 */
var fs = require('fs');
var fileArg = process.argv[2];
var filePath;
var buf;
if(fileArg) {
    filePath = fileArg;
} else {
    filePath = './resources/lesson-3.txt';
};

try{
    buf = fs.readFileSync(filePath);
    console.log(buf.toString());
} catch(err){
    console.log('Unable to load File : ' + filePath + ' Error:' + err.toString());
}
if (fileArg){
    console.log(process.argv[2]);
} else {
    console.log('No file and Path has been provided, Loaded default file.');
}