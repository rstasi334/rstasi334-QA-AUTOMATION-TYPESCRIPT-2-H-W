// Arrow function that adds all elements of an array

const sumArrayArrowFunc = (arr: (string | number)[]): number =>

    arr.reduce((acc: number, val: string | number) => acc + Number(val), 0);

// Array of strings

const stringArrayOne: string[] = ['1', '2', '3', '4'];

// Array of numbers

const numberArrayOne: number[] = [5, 6, 7, 8];

// Pass arrays to the function and print results

console.log('Sum of stringArray:', sumArrayArrowFunc(stringArrayOne));

console.log('Sum of numberArray:', sumArrayArrowFunc(numberArrayOne));
