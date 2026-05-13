/*10 | 
Implemente um programa em Java que a partir de cinco notas, informadas pelo 
usuário, calcule a média e apresente ao usuário.
Entrada
Saída
8
6
4
5
7
“A média é 6.0”
8.5
6.5
4.5
5.5
0
“A média é 5.0”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE MÉDIAS');console.log('...');

console.log('Me informe a primeira nota:');
let n1 = Number(ler());
console.log('Me informe a segunda nota:');
let n2 = Number(ler());
console.log('Me informe a terceira nota:');
let n3 = Number(ler());
console.log('Me informe a quarta nota:');
let n4 = Number(ler());
console.log('Me informe a quinta nota:');
let n5 = Number(ler());

let m = (n1 + n2 + n3 + n4 + n5) / 5;

console.log('A média é '+m);
