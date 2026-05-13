/*01 | 
Implementar um programa em Java para calcular o valor final de uma compra a 
partir do valor da compra e do cupom de desconto. O cupom diz quantos reais 
terá de desconto.
Entrada
Saída
1000
100
“Compra finalizada! O total é de R$ 900.0”
1000
1.5
“Compra finalizada! O total é de R$ 998.5”
*/
import prompt from 'prompt-sync'
let ler = prompt();
console.log('PROGRAMA DE CUPOM R$');console.log('...');

console.log('Me informe qual o valor da compra:');
let n1 = Number(ler());
console.log('Me informe o desconto do cupom:');
let c = Number(ler());

let d = n1 - c;

console.log('Compra finalizada! O total é de R$ '+d);