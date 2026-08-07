// =====================================
// LEILÃO DOS CAMPEÕES
// SCRIPT PRINCIPAL
// =====================================



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

const telaResultado = document.getElementById("telaResultado");





// =====================================
// PARTE 3
// Estado do jogo
// =====================================


let jogadores = [];

let atletaAtual = null;

let atletasDisponiveis = [];





// =====================================
// PARTE 4
// Criar jogador
// =====================================


function criarJogador(nome){


    return {


        nome:nome.trim(),


        saldo:20,


        time:{


            goleiro:null,


            zagueiro:null,


            meias:[],


            atacante:null


        }


    };


}







// =====================================
// PARTE 5
// Iniciar campeonato
// =====================================



const botaoIniciar = document.getElementById("iniciarJogo");



botaoIniciar.addEventListener("click", function(){



    const nome1 =
    document.getElementById("nomeJogador1")
    .value
    .trim();



    const nome2 =
    document.getElementById("nomeJogador2")
    .value
    .trim();



    const nome3 =
    document.getElementById("nomeJogador3")
    .value
    .trim();





    // ===============================
    // Validação nomes
    // ===============================



    if(nome1 === ""){


        alert("Digite o nome do Jogador 1");

        return;


    }



    if(nome2 === ""){


        alert("Digite o nome do Jogador 2");

        return;


    }





    if(tresJogadores.checked && nome3 === ""){


        alert("Digite o nome do Jogador 3");

        return;


    }





    // ===============================
    // Não permite nomes iguais
    // ===============================



    let nomes = [

        nome1.toLowerCase(),

        nome2.toLowerCase()

    ];



    if(tresJogadores.checked){


        nomes.push(nome3.toLowerCase());


    }



    let nomesUnicos = new Set(nomes);



    if(nomesUnicos.size !== nomes.length){


        alert("Os jogadores precisam ter nomes diferentes");

        return;


    }





    // ===============================
    // Criando jogadores
    // ===============================



    jogadores = [];



    jogadores.push(

        criarJogador(nome1)

    );



    jogadores.push(

        criarJogador(nome2)

    );




    if(tresJogadores.checked){


        jogadores.push(

            criarJogador(nome3)

        );


    }







    // Copia elenco


    atletasDisponiveis = [...atletas];





    console.log("Jogadores:");

    console.log(jogadores);





    telaInicial.style.display = "none";


    telaLeilao.style.display = "block";





    atualizarPainelJogadores();


    sortearAtleta();




});

// =====================================
// PARTE 6
// Sortear atleta
// =====================================


function sortearAtleta(){


    if(atletasDisponiveis.length === 0){


        finalizarJogo();

        return;


    }




    const indice = Math.floor(

        Math.random() * atletasDisponiveis.length

    );



    atletaAtual = atletasDisponiveis[indice];




    console.log(

        "Atleta sorteado:",

        atletaAtual

    );





    document.getElementById("nomeAtleta").innerText =
    atletaAtual.nome;



    document.getElementById("posicaoAtleta").innerText =
    atletaAtual.posicao;



    document.getElementById("notaAtleta").innerText =
    atletaAtual.nota;



}






// =====================================
// PARTE 7
// Comprar atleta
// =====================================



const confirmarCompra =
document.getElementById("confirmarCompra");



confirmarCompra.addEventListener("click", function(){



    const nome = 
    document.getElementById("nomeComprador")
    .value
    .trim()
    .toLowerCase();




    const valor = Number(

        document.getElementById("valorCompra")
        .value

    );





    const jogador = jogadores.find(function(j){


        return j.nome.toLowerCase() === nome;


    });





    if(!jogador){


        alert("Jogador não encontrado");

        return;


    }






    if(valor <= 0){


        alert("Digite um valor válido");

        return;


    }






    if(jogador.saldo < valor){


        alert("Saldo insuficiente");

        return;


    }





    const posicao = atletaAtual.posicao.toLowerCase();






    // ===============================
    // Verificar posição
    // ===============================



    if(posicao === "meia"){



        if(jogador.time.meias.length >= 2){


            alert(
                "Você já possui 2 meias"
            );


            return;


        }



    }



    else{



        if(jogador.time[posicao] !== null){


            alert(
                "Você já possui essa posição"
            );


            return;


        }



    }






    // ===============================
    // Compra
    // ===============================



    jogador.saldo -= valor;





    if(posicao === "meia"){


        jogador.time.meias.push(atletaAtual);


    }

    else{


        jogador.time[posicao] = atletaAtual;


    }








    atletasDisponiveis = 
    atletasDisponiveis.filter(function(atleta){



        return atleta !== atletaAtual;



    });







    console.log("Compra realizada");

    console.log(jogador);






    atualizarPainelJogadores();





    document.getElementById("nomeComprador").value = "";

    document.getElementById("valorCompra").value = "";





    if(verificarFimDeJogo()){


        return;


    }





    sortearAtleta();




});









// =====================================
// PARTE 8
// Ninguém quer
// =====================================



const botaoNinguem =
document.getElementById("ninguem");




botaoNinguem.addEventListener("click", function(){



    atletasDisponiveis =
    atletasDisponiveis.filter(function(atleta){


        return atleta !== atletaAtual;


    });





    sortearAtleta();



});








// =====================================
// PARTE 9
// Atualizar painel jogadores
// =====================================



function atualizarPainelJogadores(){



    const lista =
    document.getElementById("listaJogadores");



    lista.innerHTML = "";






    jogadores.forEach(function(jogador){



        const div =
        document.createElement("div");



        div.className = "cardTime";







        div.innerHTML = `



        <h3>
        👤 ${jogador.nome}
        </h3>


        <p>
        💰 Moedas:
        ${jogador.saldo}
        </p>




        <p>
        🧤 Goleiro:

        ${
            jogador.time.goleiro

            ?

            jogador.time.goleiro.nome

            :

            "Vazio"

        }

        </p>




        <p>
        🛡️ Zagueiro:

        ${
            jogador.time.zagueiro

            ?

            jogador.time.zagueiro.nome

            :

            "Vazio"

        }

        </p>





        <p>
        🎯 Meias:

        ${
            jogador.time.meias.length > 0

            ?

            jogador.time.meias
            .map(function(meia){

                return meia.nome;

            })
            .join(" - ")

            :

            "Vazio"

        }


        </p>





        <p>
        ⚽ Atacante:

        ${
            jogador.time.atacante

            ?

            jogador.time.atacante.nome

            :

            "Vazio"

        }

        </p>





        `;






        lista.appendChild(div);





    });




}
// =====================================
// PARTE 10
// Verificar fim do campeonato
// =====================================


function verificarFimDeJogo(){



    const completo = jogadores.every(function(jogador){



        return (

            jogador.time.goleiro !== null &&

            jogador.time.zagueiro !== null &&

            jogador.time.meias.length >= 2 &&

            jogador.time.atacante !== null


        );



    });





    if(completo){


        finalizarJogo();


        return true;


    }





    return false;



}









// =====================================
// PARTE 11
// Finalizar jogo
// =====================================



function finalizarJogo(){



    telaLeilao.style.display = "none";


    telaResultado.style.display = "block";



    mostrarResultado();



}









// =====================================
// PARTE 12
// Calcular pontuação
// =====================================



function calcularPontuacao(jogador){



    let pontos = 0;





    pontos += jogador.time.goleiro.nota;



    pontos += jogador.time.zagueiro.nota;





    jogador.time.meias.forEach(function(meia){


        pontos += meia.nota;


    });





    pontos += jogador.time.atacante.nota;






    return pontos;



}









// =====================================
// PARTE 13
// Mostrar resultado
// =====================================



function mostrarResultado(){



    const rankingFinal = 
    document.getElementById("rankingFinal");



    rankingFinal.innerHTML = "";






    let ranking = [];







    jogadores.forEach(function(jogador){



        ranking.push({


            nome:jogador.nome,


            pontos:calcularPontuacao(jogador),


            jogador:jogador



        });




    });






    // ordenar maior pontuação


    ranking.sort(function(a,b){


        return b.pontos - a.pontos;


    });








    ranking.forEach(function(item,index){



        const div =
        document.createElement("div");



        div.className="cardResultado";






        let colocacao = "";



        if(index === 0){


            colocacao = "🥇 CAMPEÃO";


        }


        else if(index === 1){


            colocacao = "🥈 VICE CAMPEÃO";


        }


        else if(index === 2){


            colocacao = "🥉 TERCEIRO LUGAR";


        }







        const jogador = item.jogador;






        div.innerHTML = `




        <h2>

        ${colocacao}

        </h2>




        <h3>

        👤 ${jogador.nome}

        FC

        </h3>




        <p>

        ⭐ Pontuação:

        ${item.pontos}

        pontos

        </p>




        <p>

        💰 Moedas restantes:

        ${jogador.saldo}

        </p>





        <hr>





        <p>

        🧤 Goleiro:

        ${jogador.time.goleiro.nome}

        </p>





        <p>

        🛡️ Zagueiro:

        ${jogador.time.zagueiro.nome}

        </p>





        <p>

        🎯 Meias:

        ${jogador.time.meias[0].nome}

        -

        ${jogador.time.meias[1].nome}

        </p>






        <p>

        ⚽ Atacante:

        ${jogador.time.atacante.nome}

        </p>





        `;





        rankingFinal.appendChild(div);






    });






    mostrarCampeao(ranking);




}









// =====================================
// PARTE 14
// Mostrar campeão
// =====================================



function mostrarCampeao(ranking){



    const campeao = ranking[0];





    const area =
    document.getElementById("campeaoFinal");






    area.innerHTML = `



    <div class="campeao">


        <h1>

        🏆 CAMPEÃO DO LEILÃO

        </h1>



        <h2>

        ${campeao.nome} FC

        </h2>




        <h3>

        ⭐ ${campeao.pontos}

        pontos

        </h3>



    </div>


    `;



}