/**
 * Created by dgoutam on 10/20/2014.
 */
var http = require('http');
http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on('data',console.log);
    response.on('error',console.error);
});
