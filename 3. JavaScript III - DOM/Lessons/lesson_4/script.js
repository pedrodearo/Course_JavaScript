function addContact() {
    /* NÓ EXISTENTE NA PÁGINA */

    const contactSection = document.getElementById("contacts-list");

    /* CRIANDO UM TÍTLO PARA O CONTATO */

    const h3 = document.createElement("h3");
    //Atributos do Título
    h3.innerText = "CONTATO:";

    /* CRIANDO UMA LISTA PARA O CONTATO */

    const ul = document.createElement("ul");
    const nameLi = document.createElement("li");
    //Atributos da Lista
    nameLi.innerText = "Nome: ";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "fullName";

    /* ADICIONANDO O ELEMENTO A LISTA (ul) */

    nameLi.appendChild(nameInput);
    ul.append(nameLi);

    /* CRIANDO UMA LISTA PARA O CONTATO */

    const phoneLi = document.createElement("li");
    //Atributos da Lista
    phoneLi.innerText = "Número: ";
    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.phone = "phoneNumber";

    /* ADICIONANDO O ELEMENTO A LISTA (ul) */

    phoneLi.appendChild(phoneInput);
    ul.append(phoneLi);

    /* TESTANDO ".innerHTML" */

    const addressLi = document.createElement("li");
    addressLi.innerHTML = "<label for='address'>Endereço: </label>";
    const addressInput = document.createElement("input");

    addressInput.type = "text";
    addressInput.name = "address";
    addressInput.id = "address";
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);

    /* ADICIONANDO MAIS DE UM ELEMENTO AO NÓ */

    contactSection.append(h3, ul);
}

function removeContact() {
    /* NÓ EXISTENTE NA PÁGINA */

    const contactSection = document.getElementById("contacts-list");

    /* SELECIONANDO OS ELEMENTOS PARA SEREM EXCLUIDOS */

    const titles = document.getElementsByTagName("h3");
    const contacts = document.getElementsByTagName("ul");

    /* REMOVENDO OS ELEMENTOS SELECIONADOS */

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
}
