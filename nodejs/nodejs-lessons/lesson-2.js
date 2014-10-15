/**
 * Created by goutamd on 10/15/14.
 */
// Lesson 2
/*
 You can access command-line arguments via the global process object. The process
 object has an argv property which is an array containing the complete command-l
 ine. i.e. process.argv.

 To get started, write a program that simply contains:

 console.log(process.argv)

 Run it with node program.js and some numbers as arguments. e.g:

 $ node program.js 1 2 3

 In which case the output would be an array looking something like:

 [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
 */
console.log(process.argv);
console.log(process.argv[0]); // output will be 'node'
console.log(process.argv[1]); // output will be 'path to the file'
console.log(process.argv[2]); // output will be all the args '1,2,3'


