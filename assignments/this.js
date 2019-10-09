/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - Outside of any function "this" will refer to the global object.
* 2. Implicit Binding - When the "this" keyword refers to the left of the "."
* 3. New Binding - If a function is called with the new keyword, then it's the new new object that is referenced with "this".
* 4. Explicit Binding - This will involve the .call, .apply, or .bind which mean the first argument passed to it will be the one "this" refers to. 

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//window.name = Jensen;
//function sayName () {
//  console.log(`My name is ${this.name}`)
//}


// Principle 2

// code example for Implicit Binding
//const member = {
//  name: 'Jensen',
//  age: 26,
//  greet() {
//    alert(`Hello, my name is ${this.name}`)
//  }

// Principle 3

// code example for New Binding
// function User (name, age)
// this.name = name
// this.age = age
//}  

// const me - new User('Jensen', 26);

// Principle 4

// code example for Explicit Binding
// const biking = { name: 'Jensen', myFavoriteActivity: 'biking' };
  // MyObject.prototype.doStuff.call(biking, biking.myFavoriteActivity);
