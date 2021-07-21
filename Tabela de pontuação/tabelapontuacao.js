var jogadores = []

function incluirJogador() {
    var inJogador = document.getElementById("inJogador");
    var jogador = inJogador.value;
    jogadores.push({Nome: jogador, Vitórias: 0, Empates: 0, Derrotas: 0, Pontos: 0})
    exibirNaTela(jogador);
    inJogador.value = "";
    inJogador.focus();
}
function exibirNaTela(){
    var html = "";
    for(var i=0;i<jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].Nome + "</td>"
        html += "<td>" + jogadores[i].Vitórias + "</td>"
        html += "<td>" + jogadores[i].Empates + "</td>"
        html += "<td>" + jogadores[i].Derrotas + "</td>"
        html += "<td>" + jogadores[i].Pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.Vitórias++
    jogador.Pontos = calcularPontos(jogador);
    exibirNaTela(jogador);
}
function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.Empates++
    jogador.Pontos = calcularPontos(jogador);
    exibirNaTela(jogador);
}
function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.Derrotas++
    jogador.Pontos = calcularPontos(jogador);
    exibirNaTela(jogador);
}
function calcularPontos(jogador){
    var pontos = jogador.Vitórias * 3 + jogador.Empates
    return pontos;
}
