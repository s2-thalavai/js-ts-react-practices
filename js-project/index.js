// index.js
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("TypeScript"));

// ---------------------------------------------------------------------------------

/* 

Dynamically typed

Errors appear at runtime

Flexible, but risky at scale

*/

function add(a, b) {
  return a + b;
}

add(1, "2"); // "12"

// ---------------------------------------------------------------------------------