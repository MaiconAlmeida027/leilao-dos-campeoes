// =====================================
// PARTE 1
// Controle jogadores
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
// Controle telas
// =====================================


const telaInicial = document.getElementById("telaInicial");

const telaLeilao = document.getElementById("telaLeilao");

const telaResultado =
document.getElementById("telaResultado");



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


        nome: nome.trim(),


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
// Iniciar jogo
// =====================================


const botao = document.getElementById("iniciarJogo");



botao.addEventListener("click", function(){



const nomeJogador1 = document
.getElementById("nomeJogador1")
.value
.trim();



const nomeJogador2 = document
.getElementById("nomeJogador2")
.value
.trim();



const nomeJogador3 = document
.getElementById("nomeJogador3")
.value
.trim();




// =====================================
// VALIDAÇÃO DOS NOMES
// =====================================


if(nomeJogador1 === ""){


    alert("Digite o nome do Jogador 1");


    return;


}



if(nomeJogador2 === ""){


    alert("Digite o nome do Jogador 2");


    return;


}



if(tresJogadores.checked && nomeJogador3 === ""){


    alert("Digite o nome do Jogador 3");


    return;


}

// =====================================
// Não permitir nomes iguais
// =====================================


if(nomeJogador1.toLowerCase() === nomeJogador2.toLowerCase()){


    alert("Os jogadores precisam ter nomes diferentes");


    return;


}



if(
tresJogadores.checked && 
nomeJogador1.toLowerCase() === nomeJogador3.toLowerCase()
){


    alert("Os jogadores precisam ter nomes diferentes");


    return;


}



if(
tresJogadores.checked && 
nomeJogador2.toLowerCase() === nomeJogador3.toLowerCase()
){


    alert("Os jogadores precisam ter nomes diferentes");


    return;


}


    jogadores = [];



    jogadores.push(
        criarJogador(nomeJogador1)
    );



    jogadores.push(
        criarJogador(nomeJogador2)
    );




    if(tresJogadores.checked){


        jogadores.push(
            criarJogador(nomeJogador3)
        );


    }





    atletasDisponiveis = [...atletas];




    console.log("Jogadores:");

    console.log(jogadores);




    telaInicial.style.display="none";


    telaLeilao.style.display="block";




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
    document
    .getElementById("nomeComprador")
    .value
    .trim()
    .toLowerCase();




    const valor =
    Number(
        document.getElementById("valorCompra").value
    );





    const jogador =
    jogadores.find(function(j){


        return j.nome.toLowerCase() === nome;


    });





    if(!jogador){


        alert("Jogador não encontrado");

        return;


    }





    if(valor <=0){


        alert("Digite um valor válido");

        return;


    }





    if(jogador.saldo < valor){


        alert("Saldo insuficiente");

        return;


    }






    const posicao =
    atletaAtual.posicao.toLowerCase();






    // ==============================
    // Verifica limite de posição
    // ==============================


    if(posicao === "meia"){



        if(jogador.time.meias.length >= 2){


            alert(
                "Você já possui 2 meias"
            );


            return;


        }



    }else{



        if(jogador.time[posicao] !== null){



            alert(
                "Você já possui essa posição"
            );


            return;


        }



    }






    // ==============================
    // Desconta moedas
    // ==============================


    jogador.saldo -= valor;






    // ==============================
    // Adiciona atleta
    // ==============================


    if(posicao === "meia"){


        jogador.time.meias.push(atletaAtual);


    }else{


        jogador.time[posicao] = atletaAtual;


    }







    // Remove atleta disponível


    atletasDisponiveis =
    atletasDisponiveis.filter(function(atleta){


        return atleta !== atletaAtual;


    });






    console.log("Compra realizada!");

    console.log(jogador);






    atualizarPainelJogadores();






    document.getElementById("nomeComprador").value="";


    document.getElementById("valorCompra").value="";






    verificarFimDeJogo();



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









/// =====================================
// PARTE 9
// Atualizar painel dos jogadores
// =====================================

function atualizarPainelJogadores(){


const lista = document.getElementById("listaJogadores");


lista.innerHTML = "";




jogadores.forEach(function(jogador){



const div = document.createElement("div");


div.className = "cardTime";




div.innerHTML = `



<h2>
🏟️ ${jogador.nome} FC
</h2>



<h3>
💰 ${jogador.saldo} moedas
</h3>



<hr>




<h4>
🧤 GOLEIRO
</h4>

<p>

${
jogador.time.goleiros.length > 0

?

`${jogador.time.goleiros[0].nome}
⭐ ${jogador.time.goleiros[0].nota}`

:

"Vazio"

}

</p>




<h4>
🛡️ ZAGUEIRO
</h4>

<p>

${
jogador.time.zagueiros.length > 0

?

`${jogador.time.zagueiros[0].nome}
⭐ ${jogador.time.zagueiros[0].nota}`

:

"Vazio"

}

</p>





<h4>
🎯 MEIAS
</h4>


<p>

${
jogador.time.meias.length > 0

?

jogador.time.meias.map(function(meia){

return `${meia.nome} ⭐${meia.nota}`;


}).join("<br>")

:

"Vazio"

}


</p>





<h4>
⚽ ATACANTE
</h4>


<p>

${
jogador.time.atacantes.length > 0

?

`${jogador.time.atacantes[0].nome}
⭐ ${jogador.time.atacantes[0].nota}`

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
// Verificar fim de jogo
// =====================================


function verificarFimDeJogo(){



    const completo = jogadores.every(function(jogador){



        return (

            jogador.time.goleiro &&

            jogador.time.zagueiro &&

            jogador.time.meias.length >=2 &&

            jogador.time.atacante


        );



    });





    if(completo){


        finalizarJogo();


    }



}







// =====================================
// PARTE 11
// Finalizar jogo
// =====================================


function finalizarJogo(){


    telaLeilao.style.display="none";


    telaResultado.style.display="block";



    mostrarResultado();



}

// =====================================
// Mostrar resultado final
// =====================================

function mostrarResultado(){


const ranking = document.getElementById("rankingFinal");


ranking.innerHTML = "";



let resultados = [];




jogadores.forEach(function(jogador){



let pontos = calcularPontuacao(jogador);



resultados.push({


nome:jogador.nome,


pontos:pontos,


time:jogador



});



});





// ordenar maior pontuação

resultados.sort(function(a,b){


return b.pontos - a.pontos;


});





resultados.forEach(function(resultado,index){



const div = document.createElement("div");


div.className="cardRanking";



div.innerHTML = `


<h2>

${index + 1}º 🏟️ ${resultado.nome} FC

</h2>


<p>

⭐ Pontuação:
${resultado.pontos}

</p>


`;



ranking.appendChild(div);



});





// campeão

const campeao = resultados[0];



document.getElementById("campeaoFinal").innerHTML = `


<h1>

🏆 CAMPEÃO

</h1>


<h2>

${campeao.nome} FC

</h2>


<h3>

⭐ ${campeao.pontos} pontos

</h3>



`;



}




    // Ordena do maior para menor

    ranking.sort(function(a,b){


        return b.pontos - a.pontos;


    });





    ranking.forEach(function(item,index){



        const jogador = item.jogador;



        const div =
        document.createElement("div");



        div.classList.add("cardResultado");




        let posicao = "";



        if(index === 0){

            posicao = "🥇 CAMPEÃO";

        }

        else if(index === 1){

            posicao = "🥈 VICE CAMPEÃO";

        }

        else if(index === 2){

            posicao = "🥉 TERCEIRO LUGAR";

        }




        div.innerHTML = `



        <h2>

        ${posicao}

        </h2>



        <h3>

        👤 ${jogador.nome}

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




        area.appendChild(div);



    });





    mostrarCampeao(ranking);



}









// =====================================
// Calcular pontuação do time
// =====================================

function calcularPontuacao(jogador){


let pontos = 0;



pontos += jogador.time.goleiros[0].nota;


pontos += jogador.time.zagueiros[0].nota;


jogador.time.meias.forEach(function(meia){


pontos += meia.nota;


});


pontos += jogador.time.atacantes[0].nota;



return pontos;


}








// =====================================
// Mostrar campeão
// =====================================


function mostrarCampeao(ranking){



    const campeao =
    ranking[0];



    document.getElementById("campeaoFinal").innerHTML = `



    <div class="campeao">



    <h1>

    🏆 CAMPEÃO DO LEILÃO

    </h1>



    <h2>

    ${campeao.jogador.nome}

    </h2>




    <p>

    ⭐ Pontuação:

    ${campeao.pontos}

    pontos

    </p>




    </div>



    `;



}

function finalizarJogo(){


telaLeilao.style.display="none";


telaResultado.style.display="block";


mostrarResultado();


}