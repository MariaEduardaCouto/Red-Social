var http = require('http');
var fs = require('fs');
var express = require('express'); //llamamos a Express
var app = express();
var url = require('url');

var port = 8000  // establecemos nuestro puerto

http.createServer(function(req, res) {
     if(req.url == '/html/register.html'){
          fs.readFile('../html/register.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
          })    
     }else if(req.url == '/html/logIn.html'){
          fs.readFile('../html/logIn.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
           });
     }else if(req.url == '/html/addPost.html'){
          fs.readFile('../html/addPost.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
          });
     }else if(req.url == '/html/messages.html'){
          fs.readFile('../html/messages.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
          });
     }
     else if(req.url == '/html/home.html'){
          fs.readFile('../html/home.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
          });
     }else{
          fs.readFile('../index.html', function(err, data){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               return res.end();
          });
     }
}).listen(port);

app.post('/userForm', function(req, res, next){
     var q = url.parse(req.url, true).query;
     if(q.pass == q.confirmPass){
          res.send(req.body.user + ', ' + req.body.pass);
          res.json({ mensaje: 'User Logado' }) 
     }else{
          res.json({ mensaje: 'ERRO' }) 
     }
     
})

app.post('/userLogin', function(req, res, next){
     res.send(req.body.userLog + ', ' + req.body.passLog);
})

app.post('/addPost', function(req, res, next){
     res.send(req.body.image + ', ' + req.body.txtPostName);
})

// app.get('/', function(req, res) {
//   res.json({ mensaje: '¡Hola Mundo!' })   
// })

// app.get('/cervezas', function(req, res) {
//   res.json({ mensaje: '¡A beber cerveza!' })  
// })

// app.post('/', function(req, res) {
//   res.json({ mensaje: 'Método post' })   
// })

// app.del('/', function(req, res) {
//   res.json({ mensaje: 'Método delete' })  
// })

// // iniciamos nuestro servidor
// app.listen(port)
// console.log('API escuchando en el puerto ' + port)