
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
