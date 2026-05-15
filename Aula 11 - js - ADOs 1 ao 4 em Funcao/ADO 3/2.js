import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let n1 = Number(ler('Primeira nota: '));
let n2 = Number(ler('Segunda nota: '));
let n3 = Number(ler('Terceira nota: '));

// PROCESSAMENTO e APRESENTAÇÃO
let média = Média(n1, n2, n3);
let decisão = PassouRepetiu(média);

console.log(`A média do aluno é ${média.toFixed(1)}`);
console.log(`O aluno passou? ${decisão}`);


////////////////////
//Área das Funções//
////////////////////

function Média(nota1, nota2, nota3){
  let média = (nota1 + nota2 + nota3) / 3;
    return média
}
function PassouRepetiu(média){
  if(média >= 6){
    return true
  }
  else{
    return false
  }
}
