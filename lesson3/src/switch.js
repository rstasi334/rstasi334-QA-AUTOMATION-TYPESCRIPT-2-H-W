// Створити файл switch.js, у якому переписати розгалужену конструкцію if-else if-else з файлу decision-tree.js із застосування switch.

const team = 'Barselona';
switch (team) {
    case 'Dynamo' : {
        console.log ('hello from Kyiv');
        break;
    }
    case 'Shakhtar' : {
        console.log ('hello from Donetsk');
        break;
    }
    case 'Karpaty' : {
        console.log ('hello from Lvov');
        break;
    }
    default : {
        console.log ('hello from Barsa');
    }
}

console.log ('--------------------------------------------------------------------------------------------');

const team1 = 'Barselona';
switch (team1) {
    case 'Dynamo' : {
        console.log ('hello from Kyiv');
        break;
    }
    case 'Shakhtar' : {
        console.log ('hello from Donetsk');
        break;
    }
    case 'Barselona' : {
        console.log ('Hello here Lvov, no Barselona');
        break;
    }
    default : {
        console.log ('hello from Barsa');
    }
};
