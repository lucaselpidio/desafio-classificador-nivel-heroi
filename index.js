let nomeDoHeroi = 'Lucas Elpidio';
let xp;
let rankingAtual = "";

/*
Durante a resolução do desafio não vi a necessidade de utilizar um laço de repetição, mas era um dos itens descritos no que deveria ser usado.
Decidi então usar o laço de repetição FOR apenas para aumentar a XP a cada looping, defini numeros altos para o inicio da contagem, limite de loops e quantidade incrementada para não floodar o console.
*/

for(let i = 999; i < 12000; i += 1450){

    xp = i;

    switch (true){

        case xp < 1000:
        console.log('Ferro');
        rankingAtual = 'Ferro';
        break;
    
        case xp >= 1001 && xp <= 2000:
        console.log('Bronze');
        rankingAtual = 'Bronze';
        break;
    
        case xp >= 2001 && xp <= 5000:
        console.log('Prata');
        rankingAtual = 'Prata';
        break;
    
        case xp >= 6001 && xp <= 7000:
        console.log('Ouro');
        rankingAtual = 'Ouro';
        break;
    
        case xp >= 7001 && xp <= 8000:
        console.log('Platina');
        rankingAtual = 'Platina';
        break;
    
        case xp >= 8001 && xp <= 9000:
        console.log('Ascendente');
        rankingAtual = 'Ascendente';
        break;
    
        case xp >= 9001 && xp <= 10000:
        console.log('Imortal');
        rankingAtual = 'Imortal';
        break;
    
        case xp >= 10001:
        console.log('Radiante');
        rankingAtual = 'Radiante';
        break;
    }
}

console.log("O Herói de nome "+nomeDoHeroi +" está no nível de "+rankingAtual +" com XP total de "+xp +".");




