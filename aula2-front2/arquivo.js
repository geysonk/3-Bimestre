let escolhaH = prompt("O que você escolhe? 1-(Pedra), 2-(Papel) ou 3-(Tesoura)?")
let escolhaM = parseInt(Math.random()*3+1)

let jogo = escolhaH+''+escolhaM

switch (jogo){
    case '11':
    case '22':
    case '33':
    alert('jogo empatado')
    break;
    case '12':
    case '21':
    case '32':
    alert('Você ganhou')
    break;
    case '12':
    case '23':
    case '31':
    alert ('Você perdeu')
    break;
    default:
    alert ('escolha 1, 2 ou 3 e tente denovo')

}