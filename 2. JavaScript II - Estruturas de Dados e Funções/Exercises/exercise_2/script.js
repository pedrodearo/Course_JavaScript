const imoveis = [];
let opcao = "";

do {
    opcao = prompt(
        "\nCADASTRO DE IMÓVEIS\n" +
            "Total de Imóveis: " +
            imoveis.length +
            "\n\n1. Cadastrar Imóvel\n" +
            "2. Exibir Imóveis Cadastrados\n" +
            "3. Sair"
    );

    switch (opcao) {
        case "1":
            const imovel = {};

            imovel.proprietario = prompt("Digite o nome do proprietário: ");
            imovel.quartos = prompt("Qual a quantidade de quartos: ");
            imovel.banheiros = prompt("Qual a quantidade de banheiros: ");
            imovel.garagem = prompt("O Imóvel possui Garagem? (SIm/Não) ");

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                    "\nProprietário: " +
                    imovel.proprietario +
                    "\nQuartos: " +
                    imovel.quartos +
                    "\nBanheiros: " +
                    imovel.banheiros +
                    "\nPossui Garagem? " +
                    imovel.garagem
            );

            if (confirma) {
                imoveis.push(imovel);
                alert("Imóvel Salvado com Sucesso!");
            } else {
                alert("Imóvel Apagado!");
            }

            break;

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " +
                        (i + 1) +
                        "\nProprietário: " +
                        imoveis[i].proprietario +
                        "\nQuartos: " +
                        imoveis[i].quartos +
                        "\nBanheiros: " +
                        imoveis[i].banheiros +
                        "\nPossui Garagem? " +
                        imoveis[i].garagem
                );
            }
            break;

        case "3":
            alert("Saindo...");
            break;

        default:
            alert("Opção Invalida!");
            break;
    }
} while (opcao != 3);
