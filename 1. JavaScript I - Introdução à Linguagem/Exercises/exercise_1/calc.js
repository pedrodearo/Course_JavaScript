const Entrada_1 = prompt("Infome o Primeiro Valor: ");
const Entrada_2 = prompt("Infome o Segundo Valor: ");

const PrimeiroValor = parseFloat(Entrada_1);
const SegundoValor = parseFloat(Entrada_2);

const soma = PrimeiroValor + SegundoValor;
const subtração = PrimeiroValor - SegundoValor;
const divisão = PrimeiroValor / SegundoValor;
const multiplicação = PrimeiroValor * SegundoValor;

alert(
    "Resultados: \n\n" +
        "\nSoma: " +
        soma +
        "" +
        "\nSubtração: " +
        subtração +
        "" +
        "\nDivisão: " +
        divisão +
        "" +
        "\nMultiplicação: " +
        multiplicação +
        ""
);

// "parseFloat" serve para transformar o "String" em um "Number"
