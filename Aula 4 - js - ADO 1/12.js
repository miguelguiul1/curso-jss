/*02 | 
Implementar um programa em Java para calcular o valor final de uma compra a 
partir do valor da compra e do cupom de desconto. O cupom diz a porcentagem 
que terá de desconto.
Entrada
Saída
1000
100
“Compra finalizada! O total é de R$ 0.0”
1000
1.5
“Compra finalizada! O total é de R$ 985.0”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE CUPOM %');console.log('...');

console.log('Me informe o valor da compra:');
let n1 = Number(ler());
console.log('Me informe quantos porcento de desconto o cupom está dando:');
let p = Number(ler());

let d = p/100 * n1; //desconto
let t = n1 - d // total

console.log('Compra finalizada! O total é de R$ '+t);