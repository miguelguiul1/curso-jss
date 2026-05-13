/*04 | 
Implementar um programa em Java para verificar se um número é par.
Entrada
Saída
5
“Número é par? false”
2
“Número é par? true”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE PAR');

let n = Number(ler('Me informe um número: '));

let par = n % 2 == 0;

console.log('Número é par? ' + par);