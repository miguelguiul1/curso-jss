/*05 | 
Implementar um programa em Java que retorne uma mensagem formatada com 
o valor das parcelas de uma compra, a partir do valor total da compra e da 
quantidade do parcelamento.
Entrada
Saída
1200
10
“Sua compra de R$ 1200 em 10x de R$ 120.0 foi concluída”
*/
import prompt from 'prompt-sync'
let ler = prompt ();

console.log('PROGRAMA DE PARCELA');console.log('...');

console.log('Qual o valor da sua compra?');
let c = Number(ler());

console.log('Quantas parcelas?');
let p = Number(ler());

let total = c / p;

console.log('Sua compra de R$ '+ c +'em '+ p +'x de R$ '+ total.toFixed(1) +' foi concluída');
