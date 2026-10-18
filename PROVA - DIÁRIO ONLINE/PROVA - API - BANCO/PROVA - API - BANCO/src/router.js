import usuarios from './controller/usuariosController.js';
import notas from './controller/notasController.js';

export function addRouter(api){
    api.use(usuarios);
    api.use(notas);
}
