import * as db from '../repository/usuariosRepository.js';

export async function salvarUsuario(usuario) {
  let id = await db.saveusuarios(usuario);
  return id;
}

export async function buscarUsuario(id) {
  let usuario = await db.getUsuarioId(id);
  return usuario;
}

export async function listarUsuarios() {
  let usuarios = await db.getTodosUsuarios();
  return usuarios;
}

export async function alterarUsuario(id, usuario) {
  await db.updateUsuarios(id, usuario);
}

export async function excluirUsuario(id) {
  await db.deleteUsuarios(id);
}

export async function fazerLogin(login, senha) {
  let usuario = await db.getUsuarioLogin(login);

  if (usuario == undefined) {
    return null;
  }

  if (usuario.senha != senha) {
    return null;
  }

  return usuario;
}
