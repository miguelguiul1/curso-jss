/*05 | 
Implementar um programa em Java que realize uma pergunta sobre um 
anime/filme ao usuário e verifique se a resposta está correta.
A pergunta usada como base foi: “Qual é o personagem de Friends que trabalha com TI?”
Entrada
Saída
“Joey”
“Resposta correta: false”
“Chandler”
“Resposta correta: true”
*/
import  prompt from 'prompt-sync'
let ler = prompt();

console.log('ONE PIECE \n');

let per = ler('Quem é o protagonista principal do anime "ONE PIECE"??? ');

let ver = per == 'Luffy';

console.log('Resposta correta: '+ ver );