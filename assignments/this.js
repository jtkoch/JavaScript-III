/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - Outside of any function "this" will refer to the global object of the entire window.
* 2. Implicit Binding - When the "this" keyword refers to the left of the "."
* 3. New Binding - If a function is called with the new keyword, then it's the new object that is refered to with the "this" keyword.
* 4. Explicit Binding - This will involve the .call, .apply, or .bind which means the first argument passed to it will be the one the "this" keyword refers to. 

* write out a code example of each explanation above
*/

// Principle 1

//code example for Window Binding
window.name = 'Jensen';
function sayName () {
  console.log(`My name is ${this.name}`)
}

sayName();

// Principle 2

// code example for Implicit Binding
const member = {
  name: 'Jensen',
  age: 26,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

member.greet();
// Principle 3

// code example for New Binding
function User(name, age) {
  this.name = name;
  this.age = age;
}  

const me = new User('Jensen', 26);
console.log(me);

// Principle 4

// code example for Explicit Binding
function aboutMe() { 
  return (`Hello, I'm ${this.name} and I love ${this.activity}!`);
}  

let info = {
  name: 'Jensen',
  activity: 'Biking',
}

console.log(aboutMe.call(info));