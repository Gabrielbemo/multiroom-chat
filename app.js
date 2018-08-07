/* importar as configurações do oservidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor ON');
})

var io = require('socket.io').listen(server);


/* criar uma conexão com o websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');
    
    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    })
});