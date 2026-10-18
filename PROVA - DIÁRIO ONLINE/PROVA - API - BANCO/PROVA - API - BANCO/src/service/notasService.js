import * as db from '../repository/notasRepository.js';

export async function salvarNota(nota) {
  let id = await db.saveNota(nota);
  return id;
}

export async function buscarNota(id) {
  let nota = await db.getNotaId(id);
  return nota;
}

export async function listarNotas() {
  let notas = await db.getTodasNotas();
  return notas;
}

export async function listarNotasUsuario(usuarios_id) {
  let notas = await db.getNotasUsuario(usuarios_id);
  return notas;
}

export async function alterarNota(id, nota) {
  await db.updateNota(id, nota);
}

export async function excluirNota(id) {
  await db.deleteNota(id);
}
