import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DE MÉDIA DE NOTAS');
console.log();

console.log('Me informe a primeira nota')
let nota1 = Number(ler())

console.log('Me informe a segunda nota')
let nota2 = Number(ler())

console.log('Me informe a terceira nota')
let nota3 = Number(ler())

let média = (nota1 + nota2 + nota3) / 3

console.log('A média das notas é ' + média)
