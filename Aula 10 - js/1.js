import prompt from 'prompt-sync'
let ler = prompt();

let num = Number(ler('Até qual número você quer???'))

let contador = 1;
while(contador <= num){
    console.log(contador)
    contador++
}