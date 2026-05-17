import prompt from 'prompt-sync'
let ler = prompt();

console.log('MÉDIA\n')

let n1 = Number(ler('Valor da primeira nota: '))
let n2 = Number(ler('Valor da segunda nota: '))
let n3 = Number(ler('Valor da terceira nota: '))

let media = CalcularMedia(n1, n2, n3);

console.log(`A média é ${media.toFixed(1)}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function CalcularMedia(a ,b ,c){
    let media = (a + b + c) / 3;
    return media; 
}
