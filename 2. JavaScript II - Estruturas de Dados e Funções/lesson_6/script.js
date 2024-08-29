/* O QUE É UM PARÂMETRO */

// O parâmetro é a entrada da função.
// Ele é como uma variável que fica disponível dentro da função, mas que é informada na hora de chamar a função

function double(x) {
    console.log("O dobro de " + x + " é " + x * 2);
}
double(5);
double(15);

/* PARÂMETRO NÃO INFORIMADO TEM VALOR "undefined" */

// Se uma função for chamada sem informar o parâmetro o valor usado para ele será o undefined

double(); // Se retirarmos os retornos da função, o valor exbido será "undefined"

/* VALOR PADRÃO PARA OS PARÂMETROS */

// Mas podemos declarar um valor padrão para um parãmetro, assim, se ele não for informado, o valor padrão será usado no lugar do undefined

function sayHello(name = "world") {
    console.log("Olá, " + name + "!");
}
sayHello("Pedro");
sayHello();

/* É POSSIVEIL TEM VÁRIOS PARÂMETROS */

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula

function addition(a, b) {
    console.log(a + b);
}
addition(10, 5);
addition(35, 15);

/* A ORDEM DOS PARÃMETROS É IMPORTANTE */

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último

function userCreate(name, email, password, type = "reader") {
    const user = { name, email, password, type };
    console.log(user);
}

function newUser(name, type = "reader", email, password) {
    const user = { name, email, password, type };
    console.log(user);
}

userCreate("Pedro Dearo", "dearo.pedrocosta@gmail.com", "Pdr0visk@");
newUser("Pedro Dearo", "dearo.pedrocosta@gmail.com", "Pdr0visk@");

/* FUNÇÕES COM MUITOS PARÂMENTROS */

// Ao criarmos uma função com muitos parâmetros, uma boa prática é substituí-los por um objeto

function parameterTheWrongWay(name, phone, adress, birthday, email, password) {
    // ...
}
function parameterTheRigthWay(user) {
    // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

parameterTheWrongWay(
    "name",
    "phone",
    "adress",
    "birthday",
    "email",
    "password"
);

const userData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    birthday: "",
    adress: "",
};

parameterTheRigthWay(userData);
