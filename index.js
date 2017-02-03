var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    //if (req.url === '/favicon.ico') return;

    var IP = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    var lang = request.headers['accept-language'].split(',')[0];
    var OS = request.headers['user-agent'].match(/\((.*?)\)/)[1];
    response.json({ ip: IP, language: lang, os: OS });
});

app.listen(app.get('port'), function(){});