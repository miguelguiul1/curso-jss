import prompt from 'prompt-sync'
let ler = prompt();

let base = Number(ler('Qual o tamanho da sua base? '));
let altura = Number(ler('Qual o tamanho da sua altura? '));

for (let a = 0; a < altura; a++ ){
    for (let b = 0; b < base; b++ ){
    process.stdout.write('* ')
}
    console.log('')
}