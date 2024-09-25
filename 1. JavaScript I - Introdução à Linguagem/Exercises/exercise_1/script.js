const PrimeiroNome = prompt("Digite seu Primeiro Nome: ");
const Sobrenome = prompt("Digite seu Ultimo Nome: ");
const CampoDeEstudo = prompt("Qual o seu campo de estudo? ");
const AnoDeNascimento = prompt("Em que ano você nasceu? ");

alert(
    "Você foi cadastrado com sucesso!!\n \n" +
        "Nome Completo: \n" +
        PrimeiroNome +
        " " +
        Sobrenome +
        "\nCampo de Estudo: \n" +
        CampoDeEstudo +
        " " +
        "\nIdade: \n" +
        (2023 - AnoDeNascimento)
);

// Para Pular uma Linha no JavaScript basta acrescentar "\n"
