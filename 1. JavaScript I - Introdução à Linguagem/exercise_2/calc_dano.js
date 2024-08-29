const NomeAtacante = prompt("Qual é o nome do personagem atacante?");
const PoderAtacante = parseFloat(prompt("Qual é o seu poder de ataque?"));

const NomeDefensor = prompt("Qual é nome do personagem defensor?");
let PontosdeHP = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const PoderDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const PossuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (PoderAtacante > PoderDefesa && PossuiEscudo === "Não") {
    danoCausado = PoderAtacante - PoderDefesa;
} else if (PoderAtacante > PoderDefesa && PossuiEscudo === "Sim") {
    danoCausado = (PoderAtacante - PoderDefesa) / 2;
}

PontosdeHP -= danoCausado;

alert(
    NomeAtacante +
        " causou " +
        danoCausado +
        " pontos de dano em " +
        NomeDefensor
);
alert(
    NomeAtacante +
        "\nPoder de ataque: " +
        PoderAtacante +
        "\n\n" +
        NomeDefensor +
        "\nPontos de vida: " +
        PontosdeHP +
        "\nPoder de defesa: " +
        PoderDefesa +
        "\nPossui escudo: " +
        PossuiEscudo
);
