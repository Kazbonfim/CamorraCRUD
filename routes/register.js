var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register');
});

router.post('/', function (req, res, next) {
    // Incluir o tratamento de dados
    res.send(
        `<h1>Conteudo recebido: ${req.body.usuario} / ${req.body.senha} / ${req.body.confirmar_senha}</h1>`
    );
});


module.exports = router;