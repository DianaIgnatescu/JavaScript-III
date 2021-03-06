/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - whenever none of the below rules apply, the value of 'this' is going to default to the window object.

* 2. Implicit Binding - is the most common rule and occurs when dot notation is used to invoke a function. As a rule, whatever is to the left of the dot at call time becomes the context for 'this'.

* 3. New Binding - states that when a function is invoked with the 'new' keyword, the 'this' keyword inside that function is bound to the new object being constructed.

* 4. Explicit Binding - allows us to explicitly state what the 'this' keyword is going to be in any given function invocation using .call(), .apply() or.bind(). As a rule, .call() and .apply() behave in a similar way, only with .call() you pass the arguments one by one, and with .apply() you pass them in an array. .bind() is the same as .call() except instead of returning the function, it will create a new function that can be invoked at a later time.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function alert(warning) {
  console.log(this);
  return warning;
}
alert('Do Not Enter!');

// Principle 2

// code example for Implicit Binding

const person = {
  name: 'Suzie',
  age: 32,
  introduction: function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
  }
};

person.introduction();

// Principle 3

// code example for New Binding

const Mutant = function(ability, real_name, status) {
  this.ability = ability;
  this.real_name = real_name;
  this.status = status;
  this.speak = function() {
    console.log(`My real name is ${this.real_name}, I am a ${this.status}, and my ability is ${this.ability}`)
  }
};

const mystique = new Mutant('shape-shifting', 'Raven', 'villain');
const xavier = new Mutant('reading minds', 'Charles', 'hero');
mystique.speak();
xavier.speak();

// Principle 4

// code example for Explicit Binding

const favoriteHobby = function() {
  console.log(`I love ${this.hobby}.`);
}

const robert = {
  name: 'Robert',
  age: 41,
  hobby: 'collecting stamps'
};

favoriteHobby.call(robert);