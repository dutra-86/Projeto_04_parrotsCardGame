function virar(card){
    card.classList.toggle("virada");
}


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

//EMBARALHARRRRR
function comparador() { 
	return Math.random() - 0.5; 
}
baralho.sort(comparador);

console.log(baralho);

for (let i = 0; i < qtd_cartas/2; i++){
    document.querySelector(".primeira").innerHTML +=
    `<div class="carta ${baralho[i]}" onclick="virar(this)">
    <div class="back face">
    <img src="media/back.png"/>
    </div>
    <div class="front face">
    <img src="media/${baralho[i]}parrot.gif"/>
    </div>
    </div>`;
    document.querySelector(".segunda").innerHTML +=
    `<div class="carta ${baralho[(qtd_cartas/2)+i]}" onclick="virar(this)">
    <div class="back face">
    <img src="media/back.png"/>
    </div>
    <div class="front face">
    <img src="media/${baralho[(qtd_cartas/2)+i]}parrot.gif"/>
    </div>
    </div>`;
}