/* ---------------
Server Response
--------------- */

// including the http module, 
//think of this as 'import http as httpModule'
var http = require('http');
var dt = require('./module');

// creating a server using the module we included
http.createServer
(
    // req is the user request, not called here (no get)
    // res is the server response
    function (req, res) 
    {
        // writing a header for an api response
        res.writeHead
        (
            //upon status code (OK)
            200, 
            //expect this content type
            {'Content-Type': 'text/html'}
        );
        // use mt module to write Date() to the response (res)
        res.write("the Date and time are currently: "
            + dt.myDateTime());

        //end the response
        res.end();
    }
//the server is set to listen for access from port 8080
).listen(8080);

//initiate C:\Users\rober\CODE\NODE\project1> node program.js
// browse to http://localhost:8080/
// Hello node.js World!