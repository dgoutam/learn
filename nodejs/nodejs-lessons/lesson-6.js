/**
 * Created by goutamdey on 15/10/14.
 */
var filterDir = require('./lesson-6a.js');
var dirPath = './resources/';
var extensionFilter = '.txt';

filterDir(dirPath, extensionFilter, function(err, list){
    if (err) {
        console.log('Error occured :' + err.toString());
    }
    list.forEach(function(file){
        console.log(file.toString());
    });
});
