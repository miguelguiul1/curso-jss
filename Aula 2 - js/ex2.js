import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DE SOMA')
console.log();

console.log('Me informe o primeiro número: ')
let  n1 = Number(ler());

console.log('Me informe o segundo número: ')
let n2 = Number(ler());

let soma = n1 + n2;

console.log('A soma de ' + n1 + ' + ' + n2 + ' é igual a ' + soma);
