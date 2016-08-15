
var  express =  require('express');
var path = require('path');
var app = express();
//__dirname is the current working directory

app.use('/css', express.static(__dirname + '/assets/css'));
// http://localhost:port/css
app.use('/img', express.static(__dirname + '/assets/img'));
// http://localhost:port/img
app.use('/js', express.static(__dirname + '/assets/js'));
// http://localhost:port/img

app.get('/', function(req,resp){
    resp.sendFile('index.html', {root: path.join(__dirname, './pages')})
});

app.listen(1337, function(){
    console.log('Listening on port 1337');
});