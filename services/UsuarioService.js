const UsuarioModel = require('../models/UsuarioModel');

class UsuarioService {
    constructor() {
        this.usuarios = []; // Um array simples para armazenar os usuários em memória
    };

    async inserirUsuario(usuario) {
        try {
            const usuario = await UsuarioModel.create({
                nome,
                senha,
                tarefaPendente,
                tarefaConcluida
            });
            console.log(usuario);
            return usuario;
        } catch (error){
            console.error(error);
        }
    }
};
  
module.exports = new UsuarioService();