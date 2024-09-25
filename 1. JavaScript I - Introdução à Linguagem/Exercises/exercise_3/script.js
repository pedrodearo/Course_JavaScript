const medida = parseFloat(prompt("Digite uma medida em METRO:"));
const unidade = prompt(
    "\n\nPara qual unidade deseja converter?\n" +
        "\n1 - milímetros (mm)" +
        "\n2 - centímetro (cm)" +
        "\n3 - decímetros (dm)" +
        "\n4 - decâmetros (dam)" +
        "\n5 - hectômetros (hm)" +
        "\n6 - kilometros (km)\n"
);

switch (unidade) {
    case "1":
        alert("Resultado: " + medida * 1000 + "mm");
        break;
    case "2":
        alert("Resultado: " + medida * 100 + "cm");
        break;
    case "3":
        alert("Resultado: " + medida * 10 + "dm");
        break;
    case "4":
        alert("Resultado: " + medida / 10 + "dam");
        break;
    case "5":
        alert("Resultado: " + medida / 100 + "hm");
        break;
    case "6":
        alert("Resultado: " + medida / 1000 + "km");
        break;
}
