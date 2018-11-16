## ES6 (EcamScript 2015)
New Syntax and features 
Classes, modules, 

## What is transpiler ? 
A transpiler reads code written in one language, and produces the equivalent code in another.

## Why do we need Babel transpiler ?
Browsers only currently support older Javascript
So we need to use the ES6 or Typescript features, we need to trannspile the code into the orginal JS.

## What is Babel ? 
https://github.com/babel/babel
Babel => transpile ES6 back into ES5
you can try 
https://babeljs.io/en/repl

Ex/
ES6 code 
```
const sum = (a, b) => a + b;
export { sum }
```
converted back into ES5 
```
var sum = function sum(a, b) {
  return a + b;
};
exports.sum = sum;
```

## What is weback ? 
https://github.com/webpack/webpack
Weback is a bundler for modules, we use it with babel to convert the code and bundle modules as well (bunncles mpdules into one file), but we can use babel without webapck 
