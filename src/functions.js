/*
Summary
1- Arrow functions work like normal method expressions in JavaScript, but with a shorter syntax. They also have the added benefit of being anonymous. In addition, unlike normal JavaScript function, they do not bind the this object to their function scope.
2- The map helper method in es6 allows us to create arrays by calling a function on each element of an initial array.
3- The filter helper method in es6 creates new arrays with all the same elements of an initial array depending on a test that we give it.
*/
function greeting(name) {
  return `Hi ${name}`
}

const greetingNew = name => {
  return `Hi ${name}`
}

function sum(a, b) {
  return a + b
}
const sumNew = (a, b) => a + b;

function User () {
  this.name = 'Fadi';
  this.print = function () {
    // normal function has it's own scope (this);
    function printName() {
      // this.name = 'Yassir';
      console.log('printName: ', this)
    }
    new printName()
    // arrow function is not binding to own this
    const printNameArrow = () => {
      console.log('printNameArrow: ', this)
    }
    new printNameArrow();
  }
}

const user = new User();
// user.print();

// map / filter functions;
const points = [2, 4, 6];
const duplicatedPoints = points.map((point, index) =>  point * point);
console.log(duplicatedPoints);
const filterdPoints = points.filter(point => point !== 2);
console.log(filterdPoints);
