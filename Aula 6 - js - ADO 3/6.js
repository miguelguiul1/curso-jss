/*06 | 
Implementar um programa em Java que verifique se um pedestre pode atravessar 
a rua a partir da cor do semáforo.
Entrada
Saída
“Verde”
“Pode atravessar? true”
“Vermelho”
“Pode atravessar? false”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('SEMÁFARO\n');

let cor = ler('Qual  a cor do semáfaro? Verde/Vermelho???');

let ver = cor == 'Verde';

console.log('Pode atravessar? '+ ver);