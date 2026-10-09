import * as dbdiario from '../service/usuariosService.js';

import { Router } from 'express';
const endpointusuarios = Router();

endpointusuarios.get('/usuarios/:id', async (req, resp) => {

});

endpointusuarios.get('/usuarios', async (req, resp) => {
});

endpointusuarios.post('/usuarios', async (req, resp) => {

resp.send({ id });
});

endpointusuarios.delete('/usuarios/:id', async (req, resp) => {

resp.send({ message: 'Usuário excluído com sucesso' });
});

endpointusuarios.put('/usuarios/:id', async (req, resp) => {

resp.send({ message: 'Usuário atualizado com sucesso' });
});





export default endpointlivro;