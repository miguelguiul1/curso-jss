/*07 | 
Implemente um programa em Java que a partir da altura e base de um triângulo, 
informados pelo usuário, calcule sua área e apresente ao usuário.
Entrada
Saída
10
5
“A área do triângulo é 25.0”
3
5
“A área do triângulo é 7.5”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA DO TRIÂNGULO');console.log('...');

console.log('Me informe a base:');
let n1 = Number(ler());
console.log('Me informe a altura:');
let n2 = Number(ler());

let A = (n1 * n2) / 2;

console.log('A área do triângulo é '+A);
