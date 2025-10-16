// додати 4 масиви, по 1 на кожен базовий тип (рядок, число, boolean, any), та виконати вивчені операції над ними включно з перебором (forEach() та map()).

console.log('-----------------------------------------------Strings----------------------------------------------------------------');

console.log('---------filtering----------------');

const Teams = ['Dynamo', 'Shakhtar', 'Karpaty'];

const result = Teams.filter((word) => word.length > 6);
console.log(result);


console.log('---------find element in array----------------');


const foundTeam = Teams.find((element) =>  element === "Shakhtar");
console.log(foundTeam);


console.log('---------sort strings alphabetical--------------');


const TeamsApl = ['Manchester', 'Liverpool', 'Arsenal', 'Bermingham', 'Chelsea'];
const sortedTeamsAtoZ = TeamsApl.sort();
console.log(sortedTeamsAtoZ);


console.log('---------concat-----------');


const array1 = ['Dynamo', 'Shakhtar', 'Karpaty'];
const array2 = ['Kyiv', 'Donetsk', 'Lvov'];
const array3 = array1.concat(array2);
console.log(array3);


console.log('---------includes-----------');

const cars = ['Opel', 'Lanos', 'Peugeot'];
console.log(cars.includes('BMW'));
console.log(cars.includes('Lanos'));


console.log('---------join-----------');


const city = ['Paris', 'Barcelona', 'London'];

console.log(city.join());
console.log(city.join(''));
console.log(city.join('-'));
console.log(city.join('+'));


console.log('---------forEach-----------');


const players = ['Shevchenko', 'Ronaldo', 'Messi'];
players.forEach((element) => console.log(element));


console.log('---------map-----------');


const englishWords = ["small", 'bigg', 'tall'];
const map1 = englishWords.map((element) => element + 'er');
console.log(map1);


console.log('---------...arr1,+ …arr2-----------');

const spring = ['March', 'April', 'May'];
const autumn = ['September', 'October', 'November'];
const all = [...spring, ...autumn];
console.log(all);


console.log('-----------------------------------------------Numbers----------------------------------------------------------------');

console.log('---------filtering----------------');

const ages = [11, 17, 18, 19, 40];
const checkAdult = ages.filter((element) => element >= 18);
console.log(checkAdult);


console.log('---------find element in array----------------');

const ages1 = [11, 17, 18, 19, 40];
const ageForty = ages1.find((element) => element === 40);
console.log(ageForty);

console.log('---------sort numbers ascending--------------');


const ages3 = [55, 29, 17, 60, 34];
const sortedAscend = ages3.sort((a, b) => a - b);
console.log(sortedAscend);


console.log('---------concat-----------');


const arrayFirst = [1, 2, 3];
const arraySecond = [4, 5, 6];
const arrayThird = arrayFirst.concat(arraySecond);
console.log(arrayThird);


console.log('---------includes-----------');

const lottery = [55, 29, 17, 60, 34, 44];
console.log(lottery.includes(17));
console.log(lottery.includes(18));


console.log('---------join-----------');


const ages4 = [55, 29, 17, 60, 34, 44];

console.log(ages4.join());
console.log(ages4.join(''));
console.log(ages4.join('-'));
console.log(ages4.join('+'));


console.log('---------forEach-----------');


const salary = [5500, 2900, 1700, 6000, 3400, 4400];
salary.forEach((element) => console.log(element));


console.log('---------map-----------');


const smallSalary = [1000, 2000, 3000, 4000, 5000, 6000];
const map2 = smallSalary.map((element) => element + 1000);
console.log(map2);


console.log('---------...arr1,+ …arr2-----------');

const First = [1, 2, 3];
const Second = [4, 5, 6];
const firstPlusSecond = [...First, ...Second];
console.log(firstPlusSecond);
