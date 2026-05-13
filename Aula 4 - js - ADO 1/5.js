/*05 | 
Implemente um programa em Java que a partir do lado de um quadrado, 
informado pelo usuário, calcule sua área e apresente ao usuário.
Entrada
Saída
10
“A área do quadrado é 100”
4
“A área do quadrado é 16
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA DO QUADRADO');console.log();

console.log('Me informe o comprimento do lado do quadrado:');
let n1 = Number(ler());

let área = n1 * n1;

console.log('A área do quadrado é '+área);