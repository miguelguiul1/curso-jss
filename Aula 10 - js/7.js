import prompt from 'prompt-sync'
let ler = prompt();

let l = Number(ler('QUal o tamanho do lado do seu quadrado?: '))

for (let n1 = 0; n1 < l; n1++){
    for (let n2 = 0; n2 < l; n2++){
    process.stdout.write(' * ')
}
console.log()
}