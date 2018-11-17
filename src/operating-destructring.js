// 1- Arrays
// * Spread operator
let a = [2, 4, 5];
let b = [6, ...a];

// console.log('b ', b)

// 
function print(a, b, c) {
    console.log(a, b, c)
}
let args = [1, 2, 3]
print(...args);
// 
function print2(...z) {
    console.log(z);
}
print2(...args);

// * Destructring
let destructArray = [23, 12, 34];
// =>  let f = destructArray[0]; let l = destructArray[1];
let [f, l] = destructArray; 
// =>  let n = destructArray[0]; let rest = destructArray[1 => lastIndex];
let [n, ...rest] = destructArray
// -----------------------------------------------
// 2 - Objects
// Destructring
const fullName = {
  first: 'Fadi',
  sur: 'S',
  last: 'Quader'
};

const { first: fName, last: lName } = fullName; // const fName = fullName.first
const { last } = fullName // const last = fullName.last
// spread operator
const person = {
  age: 24,
  univ: '',
  ...fullName,
}