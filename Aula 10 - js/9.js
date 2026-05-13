import prompt from 'prompt-sync'
let ler = prompt();

let n = Number(ler('Qual tabuada vocÃª quer? '));

for(let c = 0; c <= 10; c++){
    console.log(`${n} x ${c} = ${n * c}`)
}