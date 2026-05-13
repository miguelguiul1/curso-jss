/*03 | 
Implementar um programa em Java para verificar se dois retângulos possuem a 
mesma área.
Entrada
Saída
4
2
3
4
“O primeiro retângulo possui área 8.”
“O primeiro retângulo possui área 12.”
“Eles são iguais? false”
6
2
3
4
“O primeiro retângulo possui área 12.”
“O primeiro retângulo possui área 12.”
“Eles são iguais? true”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREAS DOS RETÂNGULOS SÃO IGUAIS???\n');

let r1 = Number(ler('Quanto mede a base do primeiro retângulo? '));
let r11 = Number(ler('Quanto mede o lado do primeiro retângulo? '));

let a1 = r1 * r11;

let r2 = Number(ler('Quanto mede a base do segundo retângulo? '));
let r22 = Number(ler('Quanto mede o lado do segundo retângulo? '));

let a2 = r2 * r22;

let iguais = a1 == a2;

console.log('Área do primeiro retângulo é '+ a1 );
console.log('Área do segundo retângulo é ' + a2 );
console.log('Eles são iguais? ' + iguais );