function show() {
    /* ELEMENTO ATRAVÉS DO "ID" */
    const contactList = document.getElementById("contact-list");
    console.log(contactList);

    /* ELEMENTOS ATRAVÉS DA "TAG" */

    const listElements = document.getElementsByTagName("li");
    console.log(listElements);

    /* ELEMENTOS ATRAVÉS DA "CLASS" */

    const contactInputs = document.getElementsByClassName("contact-input");
    console.log(contactInputs);

    /* ELEMENTOS ATRAVÉS DOS "NAMES" */

    const contact1 = document.getElementsByName("contact1");
    console.log(contact1);

    /* ELEMENTOS ATRAVÉS DAS "QUERYS" */

    const contacts = document.querySelectorAll("#contact-list > li > label");
    console.log(contacts);

    /* ELEMENTOS ATRAVÉS DAS "QUERYS", PARA OBTER APENAS UM ÚNICO ELEMENTO */

    const firstContact = document.querySelector("#contact-list > li > label");
    console.log(firstContact);
}
