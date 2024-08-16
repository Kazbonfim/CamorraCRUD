// Importa módulos necessários
var createError = require('http-errors'); // Para criar erros HTTP personalizados
var express = require('express'); // Framework para criar e gerenciar servidores HTTP
var path = require('path'); // Utilitário para manipulação de caminhos de arquivos
var cookieParser = require('cookie-parser'); // Middleware para análise de cookies
var logger = require('morgan'); // Middleware para registro de logs de requisições HTTP
var sequelize = require('./database/sequelize'); // Iniciando conexão ao DB
var bodyParser = require('body-parser');

// Importa os roteadores definidos
// Para definir uma nova rota: criar um arquivo, referente em './routes', copiando os modelos já existentes e definido os comportamentos e chamadas; definir aqui, neste doc, L37 e L9
var indexRouter = require('./routes/index'); // Roteador para a rota principal
var usersRouter = require('./routes/users'); // Roteador para a rota de usuários
var tasksRouter = require('./routes/tasks'); // Roteador para a rota de tarefas
var registerRouter = require('./routes/register'); // Roteador para a rota de registro

// Inicializa o aplicativo Express
var app = express();

// Importando body-parser para a aplicação
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para adicionar a instância do Sequelize à requisição
app.use((req, res, next) => {
  req.sequelize = sequelize; // Adiciona a instância do Sequelize à requisição para acesso em rotas e outros middlewares
  next(); // Passa o controle para o próximo middleware
});

// Configuração do motor de visualização (view engine)
app.set('views', path.join(__dirname, 'views')); // Define o diretório onde os templates estão localizados
app.set('view engine', 'hbs'); // Define Handlebars como o motor de templates para renderização de views

// Configuração dos middlewares
app.use(logger('dev')); // Middleware para registrar logs das requisições HTTP no modo de desenvolvimento
app.use(express.json()); // Middleware para analisar dados JSON no corpo das requisições
app.use(express.urlencoded({ extended: false })); // Middleware para analisar dados de formulários URL-encoded
app.use(cookieParser()); // Middleware para analisar cookies enviados nas requisições
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para servir arquivos estáticos a partir da pasta 'public'

// Definição das rotas
app.use('/', indexRouter); // Roteador para a rota principal
app.use('/users', usersRouter); // Roteador para a rota de usuários
app.use('/tasks', tasksRouter); // Roteador para a rota de cadastro de tarefas
app.use('/register', registerRouter); // Roteador para a rota de cadastro de tarefas

// Como definir rotas com parâmetros embutidos [TESTE]
app.get('/login/:user', function (req, res, next) {
  res.send('<h1>Funcionando!</h1>');
})

// Middleware para tratamento de erros 404 (não encontrado)
app.use(function (req, res, next) {
  next(createError(404)); // Cria um erro 404 e o passa para o middleware de tratamento de erros
});

// Middleware para tratamento de erros
app.use(function (err, req, res, next) {
  // Define variáveis locais para exibir mensagens de erro
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Exibe detalhes do erro apenas em desenvolvimento

  // Define o status da resposta e renderiza a página de erro
  res.status(err.status || 500); // Define o código de status HTTP para o erro
  res.render('error'); // Renderiza a página de erro
});

// Exporta o aplicativo Express para uso em outros módulos
module.exports = app; 
