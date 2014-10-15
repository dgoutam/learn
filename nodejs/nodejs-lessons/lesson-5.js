/**
 * Created by goutamd on 10/15/2014.
 */
var fs = require('fs');
var path = require('path');
var dirArg = process.argv[2];
var dirPath;
var extension = '.txt';
if (dirArg) {
    dirPath = fileArg;
} else {
    dirPath = './resources/';
}

fs.readdir(dirPath, function (err, fileList) {
    //handle error
    if (err) {
        console.log("Directory ' + dirPath +' does not exists or unable to read from it");
    }
    fileList.filter(function (file) {
        return  path.extname(file) === extension;
    }).forEach(function (file) {
        console.log(file);
    });

    /*
     fileList.forEach(function(file) {
     if (path.extname(file) === extension) {
     console.log(file.toLocaleString());
     }
     });
     */
});

