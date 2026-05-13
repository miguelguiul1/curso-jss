/*03 | 
Implemente um programa em Java que a partir de um número informado pelo 
usuário, calcule seu triplo e apresente ao usuário.
Entrada
Saída
10
“O triplo de 10 é 30”
-4
“O triplo de -4 é -12
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE TRIPLO')
console.log();

console.log('Me informe um número');
let n1 = Number(ler());

let triplo = n1 * 3;

console.log('O triplo de '+n1+' é '+triplo);
