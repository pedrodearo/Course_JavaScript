const arr = [
    "Frodo",
    "Sam",
    "Merry",
    "Pippin",
    "Gandalf",
    "Aragorn",
    "Legolas",
    "Gimli",
];
alert(arr);

/* Adicionar Elementos */

// Adição no Final
// push

arr.push("Boromir");
arr.push("Saruman");
arr.push("Smigol");
alert(arr);

//Adição no Começo
//unshift

arr.unshift("Boromir");
arr.unshift("Saruman");
arr.unshift("Smigol");
alert(arr);

/* Remover Elementos */

//Remoção no Final
//pop

let UltimoElemento = arr.pop();
alert(arr);
alert(UltimoElemento);

//Remoção no Começo
//shift

UltimoElemento = arr.shift();
alert(arr);
alert(UltimoElemento);

/* Pesquisar um Elemento */

//Verificar se o Elemento existe no Array
//Inclides

const inclui = arr.includes("Gandalf");
alert(inclui);

//Parra saber qual é o indice do Elemento
//indexOf

const indice = arr.indexOf("Gandalf");
alert(indice);

/* Corte e Concatenação */

//slice

const hobbits = arr.slice(2, 6);
alert(hobbits);
