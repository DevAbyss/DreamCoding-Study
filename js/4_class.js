'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

console.log('--- 1. Class Declarations ---');
// ! 1. Class Declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

console.log('--- 2. Getter and Setter ---');
// ! 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

console.log('--- 3. Fields (public, private) ---');
// ! 3. Fields (public, private)
// Too soon!
// note) 있다고 알아만 두자!
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

console.log('--- 4. Static properties and methods ---');
// ! 4. Static properties and methods
// Too soon!
// 들어오는 Data에 상관없이 공통적으로 class에서 사용할 수 있는 거라면,
// static과 static method를 이용해서 작성하는 것이 메모리의 사용을 줄여줌
// note) 있다고 알아만 두자!
class Article {
  static publisher = 'Dream Coding';

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article = new Article(1);
console.log(article.publisher);
console.log(Article.publisher);
Article.printPublisher();

console.log('--- 5. Inheritance (상속) Ploymorphism (다형성) ---');
// ! 5. Inheritance (상속) Ploymorphism (다형성)
// A way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding
  draw() {
    super.draw();
    console.log('▲');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    console.log(`Triangle color: ${this.color}`);
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(`Rectangle Area: ${rectangle.getArea()}`);

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(`Triangle Area: ${triangle.getArea()}`);

console.log('--- 6. Class checking: instanceof ---');
// ! 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, 모든 Class는 Object를 상속
triangle.toString();
