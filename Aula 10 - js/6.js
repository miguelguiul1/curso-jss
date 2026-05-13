import prompt from 'prompt-sync'
let ler = prompt();

let inicio = Number(ler('quantas estrelas você quer?'));

for(let contador=1; contador<=inicio; contador++){
    process.stdout.write(' * ')
}