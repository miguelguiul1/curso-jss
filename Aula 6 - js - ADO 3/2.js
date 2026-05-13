/*02 | 
Implementar um programa em Java para verificar se um aluno passou ou não, 
baseado em 3 notas, considerando que a média mínima para passar é 6.
Entrada
Saída
6
8
4
“A média do aluno é 6.0”
“O aluno passou? true”
4.5
1.5
3
“A média do aluno é 3.0”
“O aluno passou? false”
*/

import prompt from 'prompt-sync'
let ler = prompt();

console.log('PASSOU DE ANO??? \n');

let n1 = Number(ler('Me informe sua primeira nota: '));
let n2 = Number(ler('Me informe sua segunda nota: '));
let n3 = Number(ler('Me informe sua terceira nota: '));

let média = (n1 + n2 + n3) / 3;

let resultado = média >= 6;

console.log('A média do aluno é '+ média.toFixed(1));
console.log('O aluno passou? '+ resultado);