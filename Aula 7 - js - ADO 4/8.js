/*08 | 
Implemente um programa em 
Java que a partir de três notas 
informadas pelo usuário, calcule 
a média e avalie a situação do 
aluno. Ao final, apresente a média 
e a situação.
Entrada
Média
Maior igual a 8
Maior igual a 6 e menor que 8
Maior igual a 3 e menor que 6
Menor que 3
Situação
Aprovado com Sucesso
Aprovado
Recuperação
Reprovado
Igual a 0
Desistente
Saída
6
3
9
A média do aluno é 6.0
Situação: Aprovado
9
9
9
A média do aluno é 9.0
Situação: Aprovado com Sucesso
*/
import prompt from 'prompt-sync'
let ler = prompt();

let n1 = Number(ler('Qual o valor da primeira nota??? '))
let n2 = Number(ler('Qual o valor da segunda nota??? '))
let n3 = Number(ler('Qual o valor da terceira nota??? '))

let m = (n1 + n2 + n3) / 3;

console.log(`A média do aluno é: ${m}`)

if (m >= 8){
    console.log ('Situação: Aprovado com Sucesso')
}
else if (m >= 6){
    console.log ('Situação: Aprovado')
}else if (m >= 3){
    console.log ('Situação: Recuperação')
}else if (m < 3){
    console.log ('Situação: Reprovado')
}else if (m = 0){
    console.log ('Situação: Desistente')
}