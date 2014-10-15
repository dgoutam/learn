/**
 * Created by goutamd on 10/15/2014.
 */
    var fs = require('fs');
    var fileArg = process.argv[2];
    var filePath;

    if(fileArg) {
        filePath = fileArg;
    } else {
        filePath = './resources/lesson-4.txt';
    }

    fs.readFile(filePath, function (err,content) {
        if (err){
            console.log("Error reading file :" + err.toString());
        }
        var lines = content.toString().split('\n').length -1;
        console.log('Number of lines in the file : ' + filePath +" are :" + lines);
    });
