/*
Summary
1- Modules refer to reusable pieces of code that often exist independently in their own separate files.
2- Export in es6 sends functions, objects, or primitive values from one module to another.
3- Import in es6 receives functions, objects, or primitive values from another module.
4- The default export represents a fallback or “main” value/function for a module.
5- You cannot write the export default syntax and declare variables on the same line.
*/
// Exporting Values to other files

export const points = [1, 2, 3, 4];
export const greeting = name => `Welcome ${name}!`;

// export default
// you can't make more one default import
// you don't need the exact name when you importing the default
const sum = (a, b) => a + b;
export default sum;