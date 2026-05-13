/*10 | 
Implementar um programa em Java para calcular o salário líquido de um 
funcionário, a partir de seu salário base, do bônus mensal em porcentagem e 
do total de descontos em reais.
Entrada
1000
10
300
Saída
“Seu salário líquido é de R$ 800.0”
1000
20
200
“Seu salário líquido é de R$ 1000.0”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA SALÁRIO LIQUIDO');console.log('...');

let salarioB = Number(ler('Informe seu salárioo base: R$ '));
let bonus = Number(ler('Informe seu bônus: % '));
let descontos = Number(ler('Me informe o total de descontos do mês: R$ '));

let valorBaseBonus = (bonus / 100) * salarioB;
let salariobruto = salarioB + valorBaseBonus;
let salarioliquido = salariobruto - descontos;

console.log('Seu salário liquido é de R$ ' + salarioliquido.toFixed(1));
