

//1. Создание объектов с помощью литерала объекта 

//.1 
let fool = {
      name:"John",
      age: 25 ,
      job: "developer",
      

    }
    console.log(fool);

    //2.
    //let car = {
       // brand:"Toyota",
        //model:"Camry",
        //year:2020,
        //color: "blue",
    //}
    //console.log(car);


//2. Создание объекта с использованием конструктора объекта

 //1. 
   
function Person(name, age, job) {
    this.name = "duo";
    this.age = 17;
    this.job ="developer";
  }
   let person1 = new Person('John Doe', 30, 'Engineer');
  console.log(person1); 

//2.
function Car (brand, model, year, color) {
    this.brand = "toyoto";
    this.model = "camru";
    this.year =2024;
    this.color = "yellov"
  }
   let person2 = new Person('manga', 'bag');
  console.log(person2); 

//3. Изменение свойств объекта

//1.
//const person = {
    //name: "vivi",
    //age: 29,
    //job: "developer",
  //}
  
  //person2.name = "viola";
//console.log(person)
 
//4. Добавление новых свойств в объект

//const dog = {};
//dog.name = "Max";
//dog.age = 3;

//dog.adress = 'grozny';
 //console.log(dog)

//5.удаление свойств из объекта


const dog = {}; 

dog.name = "Rex"; 
dog.age = 3; 
dog.adress = 'grozny'; 

delete dog.name; 

console.log(dog); 

//Методы объектов

//1.

let person = {
name: "John",
age: 30,
greet: function() {
console.log("Привет, " + this.name + "!");
}
};
person.greet();

//.2
const calculator = {
add: function(a, b) {
return a + b;
},
subtract: function(a, b) {
return a - b;
},
multiply: function(a, b) {
return a * b;
},
divide: function(a, b) {
if (b === 0) {
    return;
}
return a / b;
}
};
console.log(calculator.add(5, 3)); 
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(2, 6)); 
console.log(calculator.divide(8, 2)); 
console.log(calculator.divide(5, 0)); 
//3.



let car = {

start: function() {
console.log("Машина запущена");
},

stop: function() {
console.log("Машина остановлена");
}
};


car.start(); 
car.stop(); 

//Прототипы объекта

//1.

//let person11 = {
   // name: "",
   // age: 0
//};


//let john = Object.create(person11);
//john.name = "John";
//john.age = 30;

//console.log(john);

//2.

const animal = {
    eat: function() {
      console.log("Животное кушает");
    }
  };
const dog1 = Object.create(animal);
  dog1.eat();

  //3
 

const shape = {
draw: function() {
console.log('Фигура рисуется');
}
};


const rectangle = Object.create(shape);


rectangle.draw();

//Массивы

//Создание массивов

//создайте 4 разных массивов используя все 3 способа которые были показаны в видео

//Методы массивов

//let originalArray = [10, 20, 30, 40, 50];
//originalArray.pop(); 
//originalArray.push(60); 
//originalArray.shift(); 
//originalArray.unshift(5); 
//console.log(originalArray); 

//другие методы помимо стандартных

//slice()

//1
//let originalArray = [10, 20, 30, 40, 50];
//let slicedArray = originalArray.slice(0, 3);

//console.log(slicedArray); 

//2

//let originalString = "Hello world this is a test string";


//let wordsArray = originalString.split(" ");

//let slicedArray = wordsArray.slice(0, 3);

//let newString = slicedArray.join(" ");

//console.log(newString); // "Hello world this"

//3

//et originalArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
//let slicedArray = originalArray.slice(2, 5);
//console.log(slicedArray); 

//4

//let originalString = "abcdefg";
//let slicedString = originalString.slice(1, 4);
//console.log(slicedString);

//5

//Let originalArray = [
//  { name: "Alice", age: 25 },
// { name: "Bob", age: 30 },
//  { name: "Charlie", age: 35 },
//  { name: "David", age: 40 },
//];
//let slicedArray = originalArray.slice(0, 2);
//console.log(slicedArray);


//splice()

//1

//let originalArray = [10, 20, 30, 40, 50];
//originalArray.splice(0, 1);
//console.log(originalArray); 

//2

//let originalString = "Hello world this is a test string";


//let wordsArray = originalString.split(" ");

//wordsArray.splice(0, 1);

//let newString = wordsArray.join(" ");

//console.log(newString); 

//3

//let originalArray = ["apple", "banana", "cherry", "date"];
//originalArray.splice(1, 1);
//console.log(originalArray); 

//4

let originalString = "abcdefgh";


let newString = originalString.slice(3);

console.log(newString); 

//5


//let originalArray = [
 // { id: 1, name: "Alice" },
 // { id: 2, name: "Bob" },
 // { id: 3, name: "Charlie" }
//];
//originalArray.splice(0, 1);
//console.log(originalArray);


//concat()

//1

//let array1 = [1, 2, 3];
//let array2 = [4, 5, 6];
//let combinedArray = array1.concat(array2);
//console.log(combinedArray); 

//2

//let string1 = "Hello, ";
//let string2 = "world!";
//et combinedString = string1.concat(string2);
//console.log(combinedString); 

//3

//let array1 = ["apple", "banana", "cherry"];
//let array2 = ["date", "elderberry", "fig"];
//let combinedArray = array1.concat(array2);
//console.log(combinedArray); 

//4

//let string1 = "abc";
//let string2 = "def";
//let combinedString = string1.concat(string2);
//console.log(combinedString); 

//5

//let originalArray = [1, "apple", 2, "banana"];
//let newArray = [10, 20, 30];
//let combinedArray = originalArray.concat([newArray]);
//console.log(combinedArray);


//map()

//1

//let originalArray = [1, 2, 3, 4, 5];
//let newArray = originalArray.map(function(element) {
//    return element + 1;
//});
//console.log(newArray); 

//2

let originalArray = ["apple", "banana", "cherry", "date"];


let newArray = originalArray.map(function(str) {
    return str.toUpperCase();
});


console.log(newArray); 

//3

//const people = [
 // { name: 'Alice', age: 25 },
 // { name: 'Bob', age: 30 },
 // { name: 'Charlie', age: 35 }
//];
//const peopleWithFullName = people.map(person => {
 // return {
    //  ...person,
    //  fullName: `${person.name}, ${person.age}`
  //};
//});

//console.log(peopleWithFullName);

//4

//const numbers = [1, 2, 3, 4, 5];
//const squaredNumbers = numbers.map(number => number * number);

//console.log(squaredNumbers);

//5

//const strings = ['Hello', 'World', 'JavaScript', 'Programming'];
//const lowerCaseStrings = strings.map(str => str.toLowerCase());

//console.log(lowerCaseStrings);

//filter()

//1
//function getEvenNumbers(numbers) {
//  return numbers.filter(number => number % 2 === 0);
//}


//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const evenNumbers = getEvenNumbers(numbers);

//console.log(evenNumbers);

//2
//function filterLongStrings(strings) {
 // return strings.filter(str => str.length >= 5);
//}


//const strings = ['Hello', 'World', 'JS', 'JavaScript', 'Code'];
//const longStrings = filterLongStrings(strings);

//console.log(longStrings);

//3
function filterExpensiveItems(items) {
  return items.filter(item => item.price > 1000);
}
const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 1200 },
  { name: 'Monitor', price: 300 },
  { name: 'Headphones', price: 200 }
];

const expensiveItems = filterExpensiveItems(products);

console.log(expensiveItems);

//reduce()

//1
//const numbers = [1, 2, 3, 4, 5];
//const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//console.log(sum);

//2

//const strings = ['Hello', ' ', 'World', '!', ' ', 'JavaScript', ' ', 'is', ' ', 'awesome!'];
//const combinedString = strings.reduce((accumulator, currentValue) => accumulator + currentValue, '');

//console.log(combinedString);

//3

//const numbers = [1, 2, 3, 4, 5];
//const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

//console.log(product);

//4
//const people = [
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 30 },
//  { name: 'Charlie', age: 35 },
//  { name: 'David', age: 40 }
//];

//const totalAge = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);

//const averageAge = totalAge / people.length;
//console.log(averageAge);

//sort()

//1
//const numbers = [5, 2, 8, 1, 4];
//numbers.sort((a, b) => a - b);

//console.log(numbers);

//2
//const people = [
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 30 },
//  { name: 'Charlie', age: 35 },
//  { name: 'David', age: 40 }
//];
//people.sort((person1, person2) => person1.age - person2.age);

//console.log(people);

//3

//const numbers = [5, 2, 8, 1, 4];
//numbers.sort((a, b) => b - a);

//console.log(numbers);

//4
//const strings = ['apple', 'banana', 'cherry', 'date'];
//strings.sort((a, b) => {
   // if (a > b) {
   // } else if (a < b) {
   //     return 1; 
   // } else {
   //     return 0; 
   // }
//});

//console.log(strings);

//forEach()

//1

//const numbers = [1, 2, 3, 4, 5];

//numbers.forEach(number => {
//   console.log(number);
//});

//2

//const strings = ['apple', 'banana', 'cherry', 'date'];

//strings.forEach(str => {
 //   console.log(str);
//});

//3
//const people = [
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 30 },
//  { name: 'Charlie', age: 35 },
 // { name: 'David', age: 40 }
//];
//people.forEach(person => {
 // console.log(`Name: ${person.name}, Age: ${person.age}`);
//});


//4
//const numbers = [1, 2, 3, 4, 5];
//let sum = 0;
//numbers.forEach(number => {
//    sum += number;
//});

//console.log(`Сумма всех элементов массива: ${sum}`);

//5
//const strings = ['apple', 'banana', 'cherry', 'date'];

//strings.forEach(str => {
//    console.log(`Длина строки "${str}": ${str.length}`);
//});

//find()

//1

//const numbers = [5, 12, 8, 3, 15];
//const foundNumber = numbers.find(number => number > 10);

//console.log(foundNumber); 

//2

//const strings = ['apple', 'banana', 'cherry', 'date'];
//const foundString = strings.find(str => str.includes('a'));

//console.log(foundString);

//3

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];
const foundPerson = people.find(person => person.age > 30);

console.log(foundPerson); 

//4

const numbers = [1, 3, 5, 8, 9, 10];
const foundNumber = numbers.find(number => number % 2 === 0);

console.log(foundNumber); 

//5

const strings = ['apple', 'banana', 'cherry', 'apricot'];
const foundString = strings.find(str => str.startsWith('a'));

console.log(foundString); 



