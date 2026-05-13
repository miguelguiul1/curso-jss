/*07 | 
Implementar um programa em Java para calcular o total de uma venda de açaí a 
partir da quantidade de açaís comprados, sabendo que o estabelecimento oferece 
um tamanho único para o açaí no valor de R$ 13,50
Entrada
Saída
1
“Total à pagar é R$ 13.5”
2
“Total à pagar é R$ 27.0”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('QUANTOS AÇAÍS DEVO PAGAR???');console.log('...');

console.log('Quantos açaís você vai querer?');
let açaí = Number(ler());

let pagar = açaí * 13.50;

console.log('Total à pagar é R$ '+ pagar.toFixed(1));