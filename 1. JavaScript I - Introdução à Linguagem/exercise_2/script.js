const PrimeiroCarro = prompt("Digite o MODELO do PRIMEIRO Carro:");
const PrimeiraVelocidade = parseFloat(
    prompt("Digite a VELOCIDADE em Km/h do PRIMEIRO Carro:")
);

const SegundoCarro = prompt("Digite o MODELO do SEGUNDO Carro:");
const SegundaVelocidade = parseFloat(
    prompt("Digite a VELOCIDADE do SEGUNDO Carro:")
);

if (PrimeiraVelocidade === SegundaVelocidade) {
    alert("Ambos os carros possuem a mesma velocidade!");
} else if (PrimeiraVelocidade > SegundaVelocidade) {
    alert(
        "Carro mais rápido: \n\n" +
            "Modelo: " +
            PrimeiroCarro +
            "\nVelocidade em Km/h: " +
            PrimeiraVelocidade
    );
} else {
    alert(
        "Carro mais rápido: \n\n" +
            "Modelo: " +
            SegundoCarro +
            "\nVelocidade em Km/h: " +
            SegundaVelocidade
    );
}
