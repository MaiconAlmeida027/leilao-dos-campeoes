// =====================================
// PARTE 1
// Controle quantidade jogadores
// =====================================


const doisJogadores = document.getElementById("doisJogadores");

const tresJogadores = document.getElementById("tresJogadores");

const jogador3 = document.getElementById("jogador3");



doisJogadores.addEventListener("click", function(){

    jogador3.style.display = "none";

});



tresJogadores.addEventListener("click", function(){

    jogador3.style.display = "block";

});





// =====================================
// PARTE 2
// Controle das telas
// =====================================


const telaInicial = document.getElementById("telaInicial");

const telaLeilao = document.getElementById("telaLeilao");





// =====================================
// PARTE 3
// Estado do jogo
// =====================================


let jogadores = [];

let atletaAtual = null;

let atletasDisponiveis = [];






// =====================================
// PARTE 4
// Iniciar jogo
// =====================================



const botao = document.getElementById("iniciarJogo");



botao.addEventListener("click", function(){



    const nomeJogador1 = document.getElementById("nomeJogador1").value;

    const nomeJogador2 = document.getElementById("nomeJogador2").value;

    const nomeJogador3 = document.getElementById("nomeJogador3").value;





    const jogadorUm = criarJogador(nomeJogador1);


    const jogadorDois = criarJogador(nomeJogador2);


    const jogadorTres = criarJogador(nomeJogador3);





    jogadores = [

        jogadorUm,

        jogadorDois,

        jogadorTres

    ];





    atletasDisponiveis = [...atletas];





    console.log("Jogadores:");

    console.log(jogadores);





    telaInicial.style.display = "none";


    telaLeilao.style.display = "block";





    sortearAtleta();



});









// =====================================
// PARTE 5
// Criar jogador
// =====================================


function criarJogador(nome){


    return {


        nome:nome,


        saldo:20,


        time:{


            goleiro:null,

            zagueiro:null,

            meia:null,

            atacante:null


        }


    };


}









// =====================================
// PARTE 6
// Sortear atleta
// =====================================


function sortearAtleta(){



    if(atletasDisponiveis.length === 0){


        alert("Fim do campeonato!");

        return;


    }






    const indice = Math.floor(

        Math.random() * atletasDisponiveis.length

    );






    atletaAtual = atletasDisponiveis[indice];





    console.log("Atleta sorteado:");

    console.log(atletaAtual);






    document.getElementById("nomeAtleta").innerText = atletaAtual.nome;


    document.getElementById("posicaoAtleta").innerText = atletaAtual.posicao;


    document.getElementById("notaAtleta").innerText = atletaAtual.nota;



}









// =====================================
// PARTE 7
// Confirmar compra
// =====================================



const confirmarCompra = document.getElementById("confirmarCompra");



confirmarCompra.addEventListener("click", function(){



    const nome = document.getElementById("nomeComprador").value;


    const valor = Number(

        document.getElementById("valorCompra").value

    );





    const jogador = jogadores.find(function(j){


        return j.nome === nome;


    });






    if(!jogador){


        alert("Jogador não encontrado");

        return;


    }







    if(jogador.saldo < valor){


        alert("Saldo insuficiente");

        return;


    }








    const posicao = atletaAtual.posicao.toLowerCase();






    if(jogador.time[posicao] !== null){


        alert("Você já possui essa posição");

        return;


    }







    jogador.saldo -= valor;






    jogador.time[posicao] = atletaAtual;







    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){


        return atleta !== atletaAtual;


    });






    console.log("Compra realizada");

    console.log(jogador);







    sortearAtleta();





});









// =====================================
// PARTE 8
// Ninguém quer
// =====================================



const botaoNinguem = document.getElementById("ninguem");



botaoNinguem.addEventListener("click", function(){



    console.log(

        "Atleta descartado:",

        atletaAtual

    );





    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){


        return atleta !== atletaAtual;


    });





    sortearAtleta();



});