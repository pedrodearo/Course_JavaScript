function addInput() {
    /* NÓ EXISTENTE NA PÁGINA */
    const ul = document.getElementById("inputs");

    /* CRIANÇÃO DE UM NOVO ELEMENTO */
    const newLi = document.createElement("li");
    // Atributos do Elemento Criado
    newLi.className = "list-item";
    newLi.innerText = "Novo input: ";

    /* CRIANÇÃO DE UM SEGUNDO ELEMENTO */
    const newInput = document.createElement("input");
    // Atributos do Elemento Criado
    newInput.type = "text";
    newInput.name = "input";

    /* ADICIONANDO OS ELEMENTOS AO NÓ EXISTENTE */

    //newInput -> newLi
    newLi.appendChild(newInput);
    //newLi -> ul
    ul.appendChild(newLi);
}
