function calculateTriangle() {
    const base = parseFloat(prompt("Digite a BASE do TRIÂNGULO: "));
    const heigth = parseFloat(prompt("Digite a ALTEURA do TRIÂNGULO: "));
    return (base * heigth) / 2;
}

function calculateRectangle() {
    const base = parseFloat(prompt("Digite a BASE do RETÂNGULO: "));
    const heigth = parseFloat(prompt("Digite a ALTEURA do RETÂNGULO: "));
    return base * heigth;
}

function calculateSquare() {
    const side = parseFloat(prompt("Digite UM LADO do QUADRADO: "));
    return side * side;
}

function calculateTrapezoid() {
    const large_base = parseFloat(prompt("Digite a MAIOR BASE do TRAPÉZIO: "));
    const smaller_base = parseFloat(
        prompt("Digite a MENOR BASE do TRAPÉZIO: ")
    );
    const heigth = parseFloat(prompt("Digite a ALTEURA do TRAPÉZIO: "));
    return ((large_base + smaller_base) * heigth) / 2;
}

function calculateCircle() {
    const radius = parseFloat(prompt("Digite o RAIO do CÍRCULO: "));
    return 3.14 * radius * radius;
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n\n" +
            "1. Calcular área de triângulo\n" +
            "2. Calcular área de retângulo\n" +
            "3. Calcular área de quadrado\n" +
            "4. Calcular área de trapézio\n" +
            "5. Calcular área de círculo\n" +
            "6. Sair\n"
    );
}

function executar() {
    let opcao = "";

    do {
        opcao = exibirMenu();
        let resultado;

        switch (opcao) {
            case "1":
                resultado = calculateTriangle();
                break;
            case "2":
                resultado = calculateRectangle();
                break;
            case "3":
                resultado = calculateSquare();
                break;
            case "4":
                resultado = calculateTrapezoid();
                break;
            case "5":
                resultado = calculateCircle();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção Inválida!");
                break;
        }

        if (resultado) {
            alert("Resultado: " + resultado);
        }
    } while (opcao != 6);
}

executar();
