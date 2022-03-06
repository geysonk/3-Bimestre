let escolhaH = prompt("O que você escolhe? 1-(Pedra), 2-(Papel) ou 3-(Tesoura)?") //variável declarada usando o "prompt" para recolher dados do usuário
let escolhaM = parseInt(Math.random()*3+1) //variável declarada para recolher os dados aleatórios da máquina

let jogo = escolhaH+''+escolhaM //variável declarada para juntar a escolha do usuário com a escolha aleatória da máquina

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

//com o switch conseguimos testar as opções de jogadas da máquina e do usuário declarando qual foi o vencedor
