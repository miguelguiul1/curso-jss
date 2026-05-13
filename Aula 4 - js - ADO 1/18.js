/*08 | 
Implementar um programa em Java para calcular o total de uma venda de açaí a 
partir das quantidades compradas para cada tamanho: pequeno, médio e grande, 
sabendo que o valor do açaí é R$ 13,50, R$ 15,00 e R$ 17,50 respectivamente.
Entrada
Saída
1
1
1
“Total à pagar é R$ 46.0”
2
0
1
“Total à pagar é R$ 44.5”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE AÇAÍ'); console.log('...');

let pequeno = Number(ler('Quantos açaís pequeno você vai querer???'));
let médio = Number(ler('Quantos açaís do médios você vai querer???'));
let grande = Number(ler('Quantos açaís grandes você vai querer???'));

let pagar = (pequeno * 13.5) + (médio * 15.00) + (grande * 17.50);

console.log('Total à pagar é R$ '+pagar.toFixed(1));