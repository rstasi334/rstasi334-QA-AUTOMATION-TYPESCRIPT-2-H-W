// зробити комплексний об’єкт, що мав би мінімум 2 рівні ієрархії, масив та метод, який виводитиме значення.

const obj = {
    name: 'Boris',
    surname: 'Johnson',
    details: {
        age: 60,
        gender: 'male',
        citizenship: 'United Kingdom',
        Occupation: 'Politician, author, journalist'
    }
};

console.log(Object.values(obj));
console.log(Object.values(obj.details));
