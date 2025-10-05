//ОПЕРАТОРИ ПОРІВНЯННЯ

const a = Number('5');
const b = Number('10');
const c = String(20);
const y = Number('10');
const x = Number('20');

console.log(a < b, a > b); // expected: true false
console.log(b <= y, y >= b); // expected: true true
console.log(a == b); // expected: false
console.log(c == x); // expected : true
console.log(c === x); // expected : false, 'c' in this case is not a number
console.log(b != y, c != x); // expected: false false

//ЛОГІЧНІ ОПЕРАТОРИ
const a1 = true;
const b1 = false;

console.log(a1 && b1);
console.log(a1 || b1);
console.log(!a1);

const c1 = null;
const d = 2;

const e = c1 ?? d ?? 4;

console.log(e);
