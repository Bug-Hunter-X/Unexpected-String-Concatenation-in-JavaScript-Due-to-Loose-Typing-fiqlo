# Unexpected String Concatenation in JavaScript
This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  The `+` operator can perform either numerical addition or string concatenation depending on the operands' types.  This can lead to unexpected results when dealing with `null` values.

The `bug.js` file shows the buggy code, while `bugSolution.js` provides a corrected version that handles potential type mismatches.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js (or a similar JavaScript runtime): `node bug.js`
3. Observe the unexpected output when adding a number and a string.

## Solution
The solution involves explicit type checking and conversion to ensure numerical addition is performed when expected.