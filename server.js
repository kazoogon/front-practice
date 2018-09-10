var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = {
    ".html": "text/html",
    ".css":  "text/css"
};

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, res) {  
        res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});  
        res.write(html);  
        res.end();  
    }).listen(process.env.PORT || 5000)
});