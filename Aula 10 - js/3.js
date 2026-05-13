import prompt from 'prompt-sync'
let ler = prompt();

let inicio = Number(ler('Qual o número de início?'));
let fim = Number(ler('Qual o número de fim?'));

let contador = inicio;
while(contador <= fim){
    console.log(contador)
    contador++
}