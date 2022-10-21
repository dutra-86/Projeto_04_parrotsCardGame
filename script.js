qtd_cartas = 0;
while(qtd_cartas < 4 || qtd_cartas > 14 || qtd_cartas%2==1){
    qtd_cartas = prompt("Insira a quantidade de cartas (número par entre 4 e 14)");
}

allcards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
baralho = [];

for (let i = 0; i < qtd_cartas/2; i++){
    baralho.push(allcards[i]);
    baralho.push(allcards[i]);
}

console.log(baralho);