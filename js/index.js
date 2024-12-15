// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
Generates Error: Octal literals are not allowed. Use the syntax '0o7'
const birthdate = 07/18/1983;

Use a String
const birthdate = "07/18/1983";

Use a JavaScript Date Object
const birthdate = new Date("1983-07-18");

Use Separate Numbers for Clarity
const birthdate = { month: 7, day: 18, year: 1983 };

JavaScript thinks 07 is an octal literal (base 8) due to leading zero. 
Modern JavaScript disallows this unless explicitly declared as octal using 0o (e.g., 0o7). 
For dates, always avoid leading zeroes in numeric literals unless they are part of strings 
or use the correct syntax.

When dealing with dates, using a Date object or a string representation is usually 
best practice.
*/

/*
const one = 1;
console.log(one);

const one = 2;
console.log(one);
// Error: Cannot redeclare block-scoped variable 'one'.
*/

/*
const one = 1;
console.log(one);

one = 2;
console.log(one);
// TypeError: Assignment to constant variable.
*/

/*
let bff = "Mike";
console.log(bff);

bff = "Rob";
console.log(bff);

[Running] node "c:\Users\derek\Code_Louisville\webdev-js-intro-01\js\tempCodeRunnerFile.js"
Mike
Rob

[Done] exited with code=0 in 0.07 seconds
*/

