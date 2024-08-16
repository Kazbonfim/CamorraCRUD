const Sequelize = require('sequelize');

// Cria uma nova instância do Sequelize para conectar-se a um banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite',

});

// Tenta autenticar a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conectado com sucesso!');
    })
    .catch(error => {
        console.log(`Um erro inesperado ocorreu: ${error}`);
    });

// Sincroniza o banco de dados com os modelos definidos
(async () => {
    try {
        await sequelize.sync();
        console.log('Banco de dados sincronizado');
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
})();

// Exporta a instância do Sequelize e o modelo 'Usuario'
module.exports = { sequelize };
