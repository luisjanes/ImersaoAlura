var cayman ={
    nome: "Porsche Cayman",
    imge: "https://files.porsche.com/filestore/wallpaper/multimedia/none/jdp-2016-982-718-c7-gallery-wallpaper-01/wallpaper/8c279810-e874-11ea-80cd-005056bbdc38;twebp;l63738108268;w1920;h1080/porsche-wallpaper.webp",
    atributos:{
        potência: 300,
        preço: 439000,
        velocidade: 275
    }
}
var boxster ={
    nome: "Porsche Boxster",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-25/zoom2/9a6faf2c-e870-11ea-80cd-005056bbdc38;sI;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 350,
        preço: 535000,
        velocidade: 285
    }
}
var carrera ={
    nome: "Porsche 911 Carrera",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-26/zoom2/872cfa8e-c4a9-11e9-80c5-005056bbdc38;sI;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 385,
        preço: 689000,
        velocidade: 293
    }
}
var turbos ={
    nome: "Porsche 991 Turbo S",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-interior-08/zoom2/642aeacd-4679-11ea-80c8-005056bbdc38;sI;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 650,
        preço: 1459000,
        velocidade: 330
    }
}
var panamera ={
    nome: "Porsche Panamera",
    imge: "https://files.porsche.com/filestore/image/multimedia/none/model-series-g2-2nd-panamera-intro/preview/a0519320-d30a-11ea-80cc-005056bbdc38;sP;twebp/porsche-preview.webp",
    atributos:{
        potência: 462,
        preço: 619000,
        velocidade: 280
    }
}
var cayenne ={
    nome: "Porsche Cayenne",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/cayenne-models-gallery-image-12/zoom2/a78d1007-907f-11eb-80d4-005056bbdc38;sL;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 340,
        preço: 555000,
        velocidade: 245
    }
}
var cayennecoupe ={
    nome: "Porsche Cayenne Coupê",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/cayenne-models-gallery-image-06/zoom2/9fc96635-88cc-11eb-80d4-005056bbdc38;sL;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 340,
        preço: 585000,
        velocidade: 243
    }
}
var macan ={
    nome: "Porsche Macan",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/pa-r4-model-series-gallery-image-08/zoom2/b1c9c1e7-8f4d-11e8-8d30-0019999cd470;sL;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 252,
        preço: 379000,
        velocidade: 227
    }
}
var taycan ={
    nome: "Porsche Taycan",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-j1-taycan-indoor-03/zoom2/e6e8f2ef-a66f-11ea-80ca-005056bbdc38;sL;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 408,
        preço: 589000,
        velocidade: 220
    }
}
var carreragt ={
    nome: "Porsche gt3",
    imge: "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-gt3-gallery-18/zoom2/cdce80b4-4450-11eb-80d1-005056bbdc38;sL;twebp/porsche-zoom2.webp",
    atributos:{
        potência: 510,
        preço: 1099000,
        velocidade: 318
    }
}
var cartas= [cayman, boxster, carrera, turbos, panamera, cayenne, cayennecoupe, macan, taycan, carreragt]
var cartaMaquina
var cartaJogador

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
    var divQuantidadeCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidade de cartas no jogo: " + cartas.length
    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    var divPlacar = document.getElementById("placar");
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";

    divPlacar.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    
    exibeCartaJogador()

}
function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imge})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
        
    } 
    
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName("atributo")
    for(var i=0; i < radioAtributo.length;i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = `<p class="resultado-final">Você venceu!!! :)</p>`
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = `<p class="resultado-final">Você perdeu!!! :( </p>`
        pontosMaquina++
    } else {
        htmlResultado = `<p class="resultado-final">Desculpe, foi um empate :| </p>`
    }

    if(cartas.length == 0){
        alert("Fim de jogo, confira seu placar")
        if(pontosJogador > pontosMaquina){
            htmlResultado = `<p class="resultado-final">Você venceu o jogo!!! :)</p>`
        } else if(pontosMaquina > pontosJogador) { 
            htmlResultado = `<p class="resultado-final">Você perdeu o jogo!!! :( </p>`
        } else {
            htmlResultado = `<p class="resultado-final">Desculpe, foi um empate :| </p>`
        }
    } else {
        document.getElementById("btnProximaRodada").disabled = false;
    }
    divResultado.innerHTML = htmlResultado

    document.getElementById("btnJogar").disabled = true;
    atualizaQuantidadeCartas()
    exibeCartaMaquina()
}
function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imge})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
        
    } 
    atualizaPlacar()
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById("cartas")

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
    
}