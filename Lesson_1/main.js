// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log;
let a = 'hello';
console.log(a);

let b = 'owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

let f = 10;
console.log(f);

let g = -999;
console.log(g);

let h = 3.14;
console.log(h);

let i = 2.7;
console.log(i);

let j = 16;
console.log(j);

let k = true;
console.log(k);

let l = false;
console.log(l);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації).
let firstName = 'Роман';

let middleName = 'Ігорович';

let lastName = 'Думич';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
{
    let a = 100;
    console.log(typeof a);

    let b = '100';
    console.log(typeof b);

    let c = true;
    console.log(typeof c);
}

// Додаткове для тих хто цікавився prompt`oм
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль;
{
    let name = prompt('Ваше імʼя');
    let middleName = prompt('По батькові');
    let year = prompt('Скільки вам років?');

    let result = `${name} ${middleName} ${year}`
    console.log(result);
}