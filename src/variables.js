/*
#var variables can be re-declared and updated
#let is block-scoped, can be updated but not re-declared
#const declarations are block-scoped, cannot be updated or re-declared
*/
// old var
var oldVar = 'Hello';
console.log(oldVar)
// new Var
let newVar = 'Goodbye'

{
    let newVar = 'newVar newVar'
    console.log(newVar)
    var oldVar = 'Hello Hello'
}
console.log(newVar)
console.log(oldVar)

// const
const con = 'constant value';
// const con = 'change constant value!'
const arr = [0, 1, 2];
arr.push(3); // you can do this, but you can't re-decalre
