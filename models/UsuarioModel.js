const Sequelize = require('sequelize');

const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // A cada nova entrada, o id será acrescido 
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tarefaPendente: {
        type: Sequelize.STRING(200)
    },
    tarefaConcluida: {
        type: Sequelize.STRING(200)
    }
});