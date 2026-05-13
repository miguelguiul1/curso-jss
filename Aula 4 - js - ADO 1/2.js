/*02 | 
Implemente um programa em Java que a partir de um número informado pelo 
usuário, calcule seu dobro e apresente ao usuário.
Entrada
Saída
10
“O dobro de 10 é 20”
-4
“O dobro de -4 é -8"
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE DOBRO');
console.log();

console.log('Me informe um número:');
let n1 = Number(ler());

let dobro = n1 * 2;

console.log('O dobro de ' + n1 + ' é ' + dobro);