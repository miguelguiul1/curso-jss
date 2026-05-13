/*04 | 
Implemente um programa em Java que a partir de um número informado pelo 
usuário, calcule sua metade e apresente ao usuário.
Entrada
Saída
10
“A metade de 10 é 5.0”
-4
“A metade de -4 é -2.0”
5
“A metade de 5 é 2.5*/
import prompt from 'prompt-sync'
let ler = prompt()

console.log('PROGRAMA DE METADE');console.log();

console.log('Me informe um número')
let n1 = Number(ler())

let metade = n1 / 2

console.log('A metade de '+n1+' é '+metade.toFixed(1));