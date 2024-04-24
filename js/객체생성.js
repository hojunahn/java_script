function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}, age is ${this.age}`);
    
    };
}
let person1 = new Person("고길동", 45);
let person2 = new Person("둘리", 800);

person1.sayHello();
person2.sayHello();