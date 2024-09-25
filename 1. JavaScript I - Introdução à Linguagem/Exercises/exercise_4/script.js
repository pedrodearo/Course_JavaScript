const nomeTurista = prompt("Digite o nome do turista");

let cidades = "";
let contagem = 0;
let continuar = prompt("Você visitou almuma cidade turística? (Sim/Não)");

while (continuar == "Sim") {
    let cidade = prompt("Qual o nome da cidade? ");
    cidades += "-" + cidade + "\n";
    contagem++;
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
    "Nome do Turísta: " +
        nomeTurista +
        "\nNúmero de cidades visitadas: \n " +
        contagem +
        "" +
        "\nCidades visitadas: " +
        cidades
);
