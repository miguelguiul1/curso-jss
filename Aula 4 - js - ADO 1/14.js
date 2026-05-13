/*04 | 
Implementar um programa em Java para converter reais em dólar (1$ -> R$ 5,16).
Entrada
Saída
5.16
1
0
0
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE CONVERÇÃO');console.log('...');

console.log('Me informe quantos dólares você tem:');
let n1 = Number(ler())

let c = n1 * 5.16

console.log (c.toFixed(2))