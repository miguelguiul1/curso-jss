/*04 | 
Implemente um programa em Java que escreva o dia da semana 
por extenso a partir do número do dia, sabendo que a semana 
começa no Domingo como dia zero. Se o número do dia não 
estiver entre 0 e 6, deve ser enviada a mensagem: "Dia da 
semana inválido".
Entrada
Saída
0
“Domingo”
6
“Sábado”
8
“Dia da semana inválido”
*/

import prompt from 'prompt-sync'
let ler = prompt ();
let dia = Number(ler('Qual dia da semana em número você está? '));

if (dia == 0){
    console.log('Domingo');
}
else if (dia == 1){
    console.log('Segunda');
}
else if (dia == 2){
    console.log('Terça');
}
else if (dia == 3){
    console.log('Quarta');
}
else if (dia == 4){
    console.log('Quinta');
}
else if (dia == 5){
    console.log('Sexta');
}
else if (dia == 6){
    console.log('Sábado');
}else{
    console.log('Dia da semana inválido');
}