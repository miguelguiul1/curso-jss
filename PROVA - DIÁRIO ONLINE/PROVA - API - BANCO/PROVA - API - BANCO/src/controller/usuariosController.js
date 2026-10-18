import * as dbdiario from '../service/usuariosService.js';

import { Router } from 'express';
const endpointusuarios = Router();

endpointusuarios.get('/usuarios/:id', async (req, resp) => {
  let id = req.params.id;

  let usuario = await dbdiario.buscarUsuario(id);

  if (usuario == undefined) {
    resp.status(404).send({ message: 'Usuário não encontrado' });
  } else {
    resp.send(usuario);
  }
});

endpointusuarios.get('/usuarios', async (req, resp) => {
  let usuarios = await dbdiario.listarUsuarios();

  resp.send(usuarios);
});

endpointusuarios.post('/usuarios', async (req, resp) => {
  let usuario = req.body;

  let id = await dbdiario.salvarUsuario(usuario);

  resp.send({ id });
});

endpointusuarios.post('/login', async (req, resp) => {
  let login = req.body.login;
  let senha = req.body.senha;

  let usuario = await dbdiario.fazerLogin(login, senha);

  if (usuario == null) {
    resp.status(401).send({ message: 'Login ou senha incorretos' });
  } else {
    resp.send({
      message: `Seja Bem-Vindo(a) ${usuario.login}`,
      id: usuario.id
    });
  }
});

endpointusuarios.delete('/usuarios/:id', async (req, resp) => {
  let id = req.params.id;

  await dbdiario.excluirUsuario(id);

  resp.send({ message: 'Usuário excluído com sucesso' });
});

endpointusuarios.put('/usuarios/:id', async (req, resp) => {
  let id = req.params.id;
  let usuario = req.body;

  await dbdiario.alterarUsuario(id, usuario);

  resp.send({ message: 'Usuário atualizado com sucesso' });
});

export default endpointusuarios;
