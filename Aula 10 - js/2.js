import prompt from 'prompt-sync'
let ler = prompt();

let num = Number(ler('Qual número você?'));

let contador = num;
while(contador >= 1){
    console.log(contador)
    contador--
}