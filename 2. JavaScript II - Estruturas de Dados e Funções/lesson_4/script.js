// É uma estrutura do JavaScript para ser trabalhar com dicionários chave-valor

// O par chave-valor em eum objeto JavaScript é chamado de "Propriedade"

// Diferente dos Arrays, seus elementos não posssuem nenhuma sequência

// Uma propriedade também pode ter strings, números e booleanos como chave

// Uma propriedade pode armazenar qualquer tipo de dado como valor

// Pode ser criado através de chaves {} ==> let objeto = {}

// Suas propriedades e funções podem ser referenciadas por encadeamento com ponto "." ou colchetes []

/* EXEMPLO */

objeto.prop = "Hello World!";
objeto.execultar();

// OU

let nome = "prop";
objeto[nome] = "Hello World!";
objeto.prop === objeto[nome];
let funcao = "execultar";
objeto[funcao]();
