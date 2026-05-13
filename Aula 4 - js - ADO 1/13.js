/*03 | 
Implementar um programa em Java para converter kilos para gramas.
Entrada
Saída
1
1000.0
1.5
1500.0
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('CONVERSÃO DE KG - G');console.log('...');

console.log('Quantos Kg?')
let kg = Number(ler());

let g = kg * 1000
console.log(+g);