import * as dbdiario from '../service/notasService.js';

import { Router } from 'express';
const endpointnotas = Router();

endpointnotas.get('/notas/:id', async (req, resp) => {

resp.send(nota);
})

endpointnotas.get('/notas', async (req, resp) => {

resp.send(notas);
})

endpointnotas.post('/notas', async (req, resp) => {

resp.send({ id });

})

endpointnotas.put('/notas/:id', async (req, resp) => {

resp.send({ message: 'Nota atualizada com sucesso' });
})

endpointnotas.delete('/notas/:id', async (req, resp) => {

resp.send({ message: 'Nota excluída com sucesso' });
})

export default endpointnotas;
