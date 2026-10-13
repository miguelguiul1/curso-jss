import { con } from './connection.js';

export async function saveusuarios( usuarios ) {
  const command = `
    insert into usuarios (login, senha)
      values (?, ?)
  `

  const [resposta] = await con.query(command,[
    usuarios.login,
    usuarios.senha
  ]);

  return resposta.insertId;
}

export async function getUsuarioLogin(login) {
  const command = `
    select id,
    login,
    senha
    from usuarios
    where login = ?
  `
  const [linhas] = await con.query(command, [login]);
  return linhas[0];
  
}

export async function getUsuarioId(id) {
  const command = `
    select id,
    login,
    senha
    from usuarios
    where id = ?
  `

  const [linhas] = await con.query(command, [id]);
  return linhas[0];
}

export async function getTodosUsuarios() {
  const command = `
    select id,
    login,
    senha
    from usuarios
  `

  const [linhas] = await con.query(command);
  return linhas;
}

export async function updateUsuarios(id, usuarios) {
  const command = `
    update usuarios set
      login = ?,
      senha = ?
    where id = ?
  `

  await con.query(command, [
    usuarios.login,
    usuarios.senha,
    id
  ]);
}

export async function deleteUsuarios(id) {
  const command = `delete from usuarios where id = ?`;
  await con.query(command, [id]);
}
  