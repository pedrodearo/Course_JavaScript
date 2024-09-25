const arr = [
    "Frodo",
    " Sam",
    " Merry",
    " Pippin",
    " Gandalf",
    " Aragorn",
    " Legolas",
    " Gimli",
];
alert(arr);

/* Adicionar Elementos */

// Adição no Final
// push

arr.push(" Boromir");
alert(arr);

//Adição no Começo
//unshift

arr.unshift("Smigol ");
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

/* Corte e Concatenação de Elementos */

//slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
alert(hobbits);
alert(outros);

//concat

const sociedade = hobbits.concat(outros);
alert("A SOCIEDADE DO ANEL É COMPOSTA POR:\n\n" + sociedade);

/* Substituição de Elementos */

//splice

const ElementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento");
alert(sociedade);
alert(ElementosRemovidos);

/* Repetir sobre Elementos */

//for

for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    alert(elemento + " " + "se encontra na posição: " + indice);
}
