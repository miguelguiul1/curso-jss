import prompt from 'prompt-sync'
let ler = prompt();

console.log('PERÍMETRO - OCTÁGONO\n')

let n1 = Number(ler('LADO: '));

let r = area(n1);

console.log(`A área do triângulo é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function area(b){
    let a = b * 8;
    return a;
}
