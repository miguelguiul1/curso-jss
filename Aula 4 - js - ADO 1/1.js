/* 01 | 
Implemente um programa em Java que a partir de dois números informados pelo 
usuário, calcule sua soma e apresente ao usuário.
Entrada
Saída
10
5
“A soma de 10 + 5 é 15”
8
2
“A soma de 8 + 2 é 10"
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE SOMA');
console.log();

console.log('Me informe um número');
let n1 = Number(ler());

console.log('Me informe mais um número');
let n2 = Number(ler());

let soma = n1 + n2

console.log('A soma do número ' + n1 + ' + ' + n2 + ' é ' + soma)