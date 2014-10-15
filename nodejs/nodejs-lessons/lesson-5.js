/**
 * Created by goutamd on 10/15/2014.
 */
    var fs = require('fs');
    var path = require('path');
    var dirArg = process.argv[2];
    var dirPath;
    var extension = '.txt'
    if(dirArg) {
        dirPath = fileArg;
    } else {
        dirPath = './resources/';
    }

    fs.readdir(dirPath,function(err,fileList){
        //handle error
        if (err){
            console.log("Directory ' + dirPath +' does not exists or unable to read from it");
        }
        for (i=0; i<fileList.length; i++) {
            var fileNameWithPath = fileList[i];
            if(path.extname(fileNameWithPath)=== extension){
                console.log(fileNameWithPath);
            }
        }
    });

