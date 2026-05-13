/*01 | 
Implementar um programa em Java para verificar se uma pessoa está com febre, 
sabendo que é considerado febre a partir de 37.3 graus.
Entrada
Saída
35
“Você está com febre? false”
37.5
“Você está com febre? true”
*/

import prompt from 'prompt-sync'
let ler = prompt();

console.log('VOCÊ ESTÁ COM FEBRE??? \n'); // \n pula uma linha

let graus = Number(ler('Com quantos graus você está???'));

let resultado = graus >= 37.3;

console.log('Você está com febre? ' + resultado);