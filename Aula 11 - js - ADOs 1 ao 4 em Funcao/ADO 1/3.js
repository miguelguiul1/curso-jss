import prompt from 'prompt-sync'
let ler = prompt();

console.log('TRIPLO\n')

let n1 = Number(ler('Número: '))

let r = triplo(n1)

console.log(`O triplo de ${n1} é ${r}`)


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function triplo(a){
    let t = a* 3;
    return t
}

