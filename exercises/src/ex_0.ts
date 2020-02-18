/**
 * Exercise 0: Basic types
 *
 * Annotate following code with types.
 */

function sum(number1, number2) {
  return number1 + number2;
}

const square = number => number * number;

function greeting(name) {
  return `hello ${name}`;
}

const userNames = users => {
  let names = users.map(u => u.name);
  return names.join(', ');
};

const getDate = date => date.toLocaleDateString();

const createUser = function(name) {
  let age;

  return {
    setName: newName => (name = newName),

    getName: () => name,

    getAge: function() {
      return age;
    },

    setAge: newAge => {
      age = newAge;
    },
  };
};
