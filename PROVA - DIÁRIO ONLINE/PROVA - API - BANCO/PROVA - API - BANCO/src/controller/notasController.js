import * as dbdiario from '../service/notasService.js';

import { Router } from 'express';
const endpointnotas = Router();

endpointnotas.get('/notas/:id', async (req, resp) => {
  let id = req.params.id;

  let nota = await dbdiario.buscarNota(id);

  if (nota == undefined) {
    resp.status(404).send({ message: 'Nota não encontrada' });
  } else {
    resp.send(nota);
  }
})

endpointnotas.get('/notas', async (req, resp) => {
  let notas = await dbdiario.listarNotas();

  resp.send(notas);
})

endpointnotas.get('/usuarios/:id/notas', async (req, resp) => {
  let id = req.params.id;

  let notas = await dbdiario.listarNotasUsuario(id);

  resp.send(notas);
})

endpointnotas.post('/notas', async (req, resp) => {
  let nota = req.body;

  let id = await dbdiario.salvarNota(nota);

  resp.send({ id });
})

endpointnotas.put('/notas/:id', async (req, resp) => {
  let id = req.params.id;
  let nota = req.body;

  await dbdiario.alterarNota(id, nota);

  resp.send({ message: 'Nota atualizada com sucesso' });
})

endpointnotas.delete('/notas/:id', async (req, resp) => {
  let id = req.params.id;

  await dbdiario.excluirNota(id);

  resp.send({ message: 'Nota excluída com sucesso' });
})

export default endpointnotas;
