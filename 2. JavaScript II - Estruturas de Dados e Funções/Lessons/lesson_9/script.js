let people = {
    name: "Pedro",
    age: "18",
    sayHello() {
        console.log("Hello World! My name is " + this.name);
    },
};

console.log(people);

people.sayHello();
