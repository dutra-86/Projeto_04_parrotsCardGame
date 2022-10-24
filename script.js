function venceu(){
    document.querySelector(".primeira").innerHTML = '';
    document.querySelector(".segunda").innerHTML = '';
    alert(`Parabéns, você venceu em ${timerRef.innerHTML} segundos!`);
    let again = '';
    while (again != 'sim'){
        again = prompt("Deseja jogar novamente? (sim/nao)");
        if (again == 'nao'){
            break;
        }
    }
    if (again == 'sim'){
        seconds = 0;
        minutes = 0;
        clearInterval(contando);
        game();
    }
}

function desvirar(c1,c2){
    document.querySelectorAll(`.${c1}`)[0].classList.remove("virada");
    document.querySelectorAll(`.${c1}`)[1].classList.remove("virada");
    document.querySelectorAll(`.${c2}`)[0].classList.remove("virada");
    document.querySelectorAll(`.${c2}`)[1].classList.remove("virada");
}

function virar(card, tipo){
    if (card.classList.contains("virada") == false){
        card.classList.toggle("virada");
        cartas_selecionadas.push(tipo);
        if (cartas_selecionadas.length == 2){
            if (cartas_selecionadas[0] != cartas_selecionadas[1]){
                setTimeout(desvirar,1000,cartas_selecionadas[0],cartas_selecionadas[1]);
            }
            else{
                //ACHOU O PAR
                contador_acertos ++;
                if (contador_acertos == qtd_cartas/2){
                    setTimeout(venceu,1000);
                }
            }
            cartas_selecionadas = [];
        }
    }
}

let contador_acertos = 0;
let cartas_selecionadas=[];
let qtd_cartas = 0;

let [seconds, minutes] = [0,0];
let timerRef = document.querySelector('.relogio');
let int = null;

function displayTimer(){
    seconds ++;
    if (seconds == 60){
        seconds = 0;
        minutes ++;
    }
    let seconds_fixed = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    let minutes_fixed = minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })
    timerRef.innerHTML = `${minutes_fixed} : ${seconds_fixed}`;
}
function game(){
    qtd_cartas = 0;
    contador_acertos = 0;
    cartas_selecionadas=[];

    while(qtd_cartas < 4 || qtd_cartas > 14 || qtd_cartas%2==1){
        qtd_cartas = prompt("Insira a quantidade de cartas (número par entre 4 e 14)");
    }

    contando = setInterval(displayTimer, 1000);

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
        `<div class="carta ${baralho[i]}" onclick="virar(this,'${baralho[i]}')">
        <div class="back face">
        <img src="media/back.png"/>
        </div>
        <div class="front face">
        <img src="media/${baralho[i]}parrot.gif"/>
        </div>
        </div>`;
        document.querySelector(".segunda").innerHTML +=
        `<div class="carta ${baralho[(qtd_cartas/2)+i]}" onclick="virar(this,'${baralho[(qtd_cartas/2)+i]}')">
        <div class="back face">
        <img src="media/back.png"/>
        </div>
        <div class="front face">
        <img src="media/${baralho[(qtd_cartas/2)+i]}parrot.gif"/>
        </div>
        </div>`;
    }

}

game();