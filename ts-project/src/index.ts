function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("TypeScript"));

// ---------------------------------------------------------------------------------

/*

  Statically typed superset of JS

  Errors caught at compile time

  Safer, scalable, self-documenting

*/

function add(a: number, b: number): number {
  return a + b;
}

// add(1, "2"); // Compile-time error

add(1, 2);

// “TypeScript adds a static type system on top of JavaScript to catch bugs before runtime.”

// ---------------------------------------------------------------------------------

/*

2. tsconfig.json Basics (What Interviewers Care About)

tsconfig.json controls how TypeScript compiles JS.

*/