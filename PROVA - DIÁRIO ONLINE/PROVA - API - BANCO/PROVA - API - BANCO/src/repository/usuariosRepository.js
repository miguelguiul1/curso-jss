import { con } from './connection.js';

export async function saveusuarios( usuario ) {
  const command = `
    insert into usuario (nome, email, senha)
      values (?, ?, ?)
  `

  const [resposta] = await con.query(command,[
    usuario.nome,
    usuario.email,
    usuario.senha
  ]);

  return resposta.insertId;
}

export async function getUsuarioId(id) {
  const command = `
    select id,
    nome,
    email,
    senha
    from usuario
    where id = ?
  `

  const [linhas] = await con.query(command, [id]);
  return linhas[0];
}

export async function getTodosUsuarios() {
  const command = `
    select id,
    nome,
    email,
    senha
    from usuario
  `

  const [linhas] = await con.query(command);
  return linhas;
}

export async function updateUsuarios(id, usuario) {
  const command = `
    update usuario set
      nome = ?,
      email = ?,
      senha = ?
    where id = ?
  `

  await con.query(command, [
    usuario.nome,
    usuario.email,
    usuario.senha,
    id
  ]);
}

export async function deleteUsuarios(id) {
  const command = `delete from usuario where id = ?`;
  await con.query(command, [id]);
}
    livro.nome,
    livro.data_livro
  ;

  return resposta.insertId;
  