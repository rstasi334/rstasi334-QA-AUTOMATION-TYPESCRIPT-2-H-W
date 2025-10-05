// Підготувати файл decision-tree.js, у якому написати розгалужену конструкцію if та if-else if-else з використанням операцій порівняння і логічних операторів.

const b1 = true;
const b2 = false;

if (b1 && b2) {
    console.log ('black');
}
if (b1 || b2) {
    console.log ('white');
}

console.log ('--------------------------------------------------------------------------------------------');

const a = 5;
const b = 10;
const c = 20;

// операції порівняння

if (a >= b) {
    console.log ('Shakhtar');
} else if (c <= b) {
    console.log ('Dynamo');
} else {
    console.log ('Karpaty');
};
