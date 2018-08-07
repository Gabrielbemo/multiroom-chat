module.exports.iniciaChat = function(app, req, res){
    var dadosForm = req.body;

    req.assert('apelido','Nome é obrigatório').notEmpty();
    req.assert('apelido','Nome de conter entre 3 e 15 caracters').len(3,15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao: erros});
        return;
    }

    app.get('io').emit('msgParaCliente', {apelido:dadosForm.apelido, mensagem: ' Acabou de conectar !!!'})

    res.render('chat', {dadosForm: dadosForm});
}