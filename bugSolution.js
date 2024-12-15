function foo(a, b) {
  // Explicit type checking and conversion
  a = a === null ? 0 : parseFloat(a);
  b = b === null ? 0 : parseFloat(b);

  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle cases where conversion fails
  }

  return a + b; // Numerical addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(5, '5')); // Output: 10