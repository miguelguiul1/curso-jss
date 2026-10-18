import { con } from './connection.js';

export async function saveNota( nota ) {
  const command = `
    insert into nota (usuarios_id, data_nota, titulo, conteudo)
      values (?, ?, ?, ?)
  `

  const [resposta] = await con.query(command,[
    nota.usuarios_id,
    nota.data_nota,
    nota.titulo,
    nota.conteudo
  ]);

  return resposta.insertId;
}

export async function getNotaId(id) {
  const command = `
    select id,
    usuarios_id,
    data_nota,
    titulo,
    conteudo,
    criado,
    atualizado
    from nota
    where id = ?
  `

  const [linhas] = await con.query(command, [id]);
  return linhas[0];
}

export async function getTodasNotas() {
  const command = `
    select id,
    usuarios_id,
    data_nota,
    titulo,
    conteudo,
    criado,
    atualizado
    from nota
  `

  const [linhas] = await con.query(command);
  return linhas;
}

export async function getNotasUsuario(usuarios_id) {
  const command = `
    select id,
    usuarios_id,
    data_nota,
    titulo,
    conteudo,
    criado,
    atualizado
    from nota
    where usuarios_id = ?
  `

  const [linhas] = await con.query(command, [usuarios_id]);
  return linhas;
}

export async function updateNota(id, nota) {
  const command = `
    update nota set
      data_nota = ?,
      titulo = ?,
      conteudo = ?,
      atualizado = now()
    where id = ?
  `

  await con.query(command, [
    nota.data_nota,
    nota.titulo,
    nota.conteudo,
    id
  ]);
}

export async function deleteNota(id) {
  const command = `delete from nota where id = ?`;
  await con.query(command, [id]);
}
