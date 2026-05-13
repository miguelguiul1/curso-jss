/* 03 | 
Implemente um programa em Java que informe a situação de um 
orçamento familiar baseado no total de ganhos e gastos. Se o total 
de ganhos for maior ou igual ao total de gastos, deve ser exibida a 
mensagem: "Você está dentro do orçamento!", senão "Você 
está fora do orçamento! Não gaste mais!"
Entrada
Saída
1000
2000
“Você está fora do orçamento! Não gaste mais!”
2000
1000
“Você está dentro do orçamento!”
2000
2000
“Você está dentro do orçamento!”
*/
import prompt from 'prompt-sync'
let ler = prompt ();

let ganho = ler ('Quanto você ganha? ');

let gasto = ler ('Quanto você gasta? ');

if (ganho >= gasto ) {
    console.log('Você está dentro do orçamento!');
}
else {
    console.log('Você está fora do orçamento! Não gaste mais!');
}