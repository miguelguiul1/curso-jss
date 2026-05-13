/*02 | 
Implemente um programa em Java que retorne uma mensagem com a 
ação que um pedestre deve realizar ao ver a cor de seu semáforo. As 
possíveis ações estão listadas abaixo. Se a cor for diferente das opções 
possíveis, a função deve retornar uma mensagem com a informação: 
"Farol inoperante"
Semáforo
Vermelho
Verde
Ação
Espere
Atravesse
Entrada
“Vermelho”
Saída
“Espere”
“Verde”
“Atravesse”
“Roxo”
“Farol Inoperante”
*/
import prompt from 'prompt-sync'
let ler = prompt();

let cor = ler('Qual a cor do Farol? ');

if (cor == 'Verde') {
    console.log('Atravesse');
}
else if (cor == 'Vermelho') {
    console.log('Espere');
}
else if (cor == 'Roxo') {
    console.log('Farol Inoperante');
}
