/*Implemente um programa em Java que calcule o total a se pagar pela compra 
de ingressos de cinema sabendo que cada ingresso custa R$ 28,50. O usuário 
deve informar o tipo dos ingressos (Meia ou Inteira) e a quantidade de 
ingressos. 
Obs: Nessa versão do programa, o usuário está limitado a escolher um tipo apenas para ser 
usado em todos ingressos.
Entrada
Saída
Meia
2
O total a pagar é R$ 28.50
Inteira
2
O total a pagar é R$ 57.00
*/

import prompt from 'prompt-sync'
let ler = prompt(); 

console.log('PROGRAMA DE INGRESSOS ');console.log();

let quantidade = Number(ler('Quantos ingressos você quer?'));
let ingresso = ler('Você quer Meia ou Inteira? ');

if (ingresso == 'Meia') { 
    let preço = quantidade * 14.25
     console.log('O total a pagar é R$ '+ preço.toFixed(2)); } 

else if (ingresso == 'Inteira') {
     let preço = quantidade * 28.50        
     console.log('O total a pagar é R$ '+ preço.toFixed(2)); } 

else { console.log('Tente Novamente'); }