/*06 | 
Implemente um programa em Java que a partir da altura e base de um retângulo, 
informados pelo usuário, calcule sua área e apresente ao usuário.
Entrada
Saída
10
5
“A área do retângulo (10 por 5) é 50”
4
1
“A área do retângulo (4 por 1) é 4”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA DO RETÂNGULO');console.log('...');

console.log('Me informe a base:');
let base = Number(ler());

console.log('Me informe a altura:');
let altura = Number(ler());

let área = base * altura;

console.log('A área do retângulo ('+base+' por '+altura+') é '+área);