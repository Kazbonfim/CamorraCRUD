const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
  async inserir(req, res) {
    const usuario = req.body;
    const novoUsuario = UsuarioService.inserirUsuario(usuario);
    return res.status(201).json(novoUsuario); // *
  }

  async resgatar(req, res) {
    const { id } = req.params;
    const usuario = UsuarioService.resgatarUsuario(id);
    if (usuario) {
      return res.status(200).json(usuario); // Retornar a view em caso de sucesso
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // Retornar a view de erro, ou retornar á página anterior
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const usuarioAtualizado = UsuarioService.atualizarUsuario(id, dadosAtualizados);
    if (usuarioAtualizado) {
      return res.status(200).json(usuarioAtualizado); // *
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // **
    }
  }
}

module.exports = new UsuarioController();