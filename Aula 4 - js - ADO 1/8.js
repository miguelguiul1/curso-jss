/*08 | 
Implemente um programa em Java que a partir do lado de um octágono de lados 
iguais, informados pelo usuário, calcule seu perímetro e apresente ao usuário.
Entrada
Saída
8
“O perímetro do octágono é 64”
3
“O perímetro do octágono é 24”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PERÍMETRO DO OCTÁGONO');console.log('...');

console.log('Qual o comprimento de cada lado?')
let n1 = Number(ler());

let P = n1 * 8;

console.log('O perímetro do octágono é '+P)