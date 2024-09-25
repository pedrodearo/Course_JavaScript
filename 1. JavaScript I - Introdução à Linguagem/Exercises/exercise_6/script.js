const numeroDigitado = prompt("Digite um número para descobrir sua tabuada:");
let resultado = "";
let multiplicador = 1;

for (; multiplicador <= 20; multiplicador++) {
    resultado +=
        "\n->" +
        numeroDigitado +
        " * " +
        multiplicador +
        " = " +
        numeroDigitado * multiplicador;
}

alert(resultado);
