/*07 | 
Implementar um programa em Java que verifique se uma pessoa está acima do 
peso ideal a partir de seu peso e altura, bases para o cálculo do IMC (pesquise a 
fórmula do IMC).
Entrada
Saída
1.8
80
“Seu IMC é 24.6913580”
“Está acima do peso ideal? false”
1.8
85
“Seu IMC é 26.2345679”
“Está acima do peso ideal? true”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('IMC \n');

let peso = Number(ler('Quantos você pesa em km??? '));
let altura = Number(ler('Quanto de altura você tem em m??? '))

let IMC = peso / (altura ** 2);
let ideal = IMC >= 25;

console.log('Seu IMC é '+IMC);
console.log('Está acima do peso ideal? '+ideal);