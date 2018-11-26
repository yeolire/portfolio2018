var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');

var template = require('lib/template.js');

var app = http.createServer(function(request, response) {
var _url = request.url;
var queryData = url.parse(_url, true).query;
var pathname = url.parse(_url, true).pathname;
if (pathname === '/') {
  fs.readdir('./data', function(err, filelist) {
    var filteredId = path.parse(queryData.id).base;
    if (queryData.id === undefined) {
      filteredId = 'index';
    }
    fs.readFile(`./data/${filteredId}`, 'utf-8', function(err, contents) {
      var html = template.html(contents);
      response.writeHead(200);
      response.end(html);
    });
  });
}
} else {
  response.writeHead(404);
  response.end('Not found');
}
});
});
app.listen(5000);
