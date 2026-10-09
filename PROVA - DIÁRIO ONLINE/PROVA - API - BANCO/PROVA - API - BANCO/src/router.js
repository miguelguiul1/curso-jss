import livro from './controller/livroController.js';
import cliente from './controller/clienteController.js';
import venda from './controller/vendaController.js';
import vendaItem from './controller/vendaItemController.js';

export function addRouter(api){
    api.use(livro);
    api.use(cliente);
    api.use(venda);
    api.use(vendaItem);
}