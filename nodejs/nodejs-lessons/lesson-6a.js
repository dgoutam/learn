/**
 * Created by goutamdey on 15/10/14.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extension, callback) {

    fs.readdir(dirPath, function (err, fileList) {
        //handle error
        if (err) {
            return(callback(err));
        }

        list = fileList.filter(function (file) {
            return  path.extname(file) === extension;
        });
        return callback(null, list);
    });
};