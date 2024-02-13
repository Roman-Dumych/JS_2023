// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let q = 'hello';
let w = 'owu';
let e = 'com';
let r = 'ua';
let t = 1;
let y = 10;
let u = -999;
let i = 123;
let o = 3.14;
let p = 2.7;
let f = 16;
let s = true;
let d = false;

console.log(q, w, e, r, t, y, u, i, o, p, f, s, d);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let lastName = 'Думич';
let firstName = 'Роман';
let middleName = 'Ігорович';

console.log(`${lastName} ${firstName} ${middleName}`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let FirstName = prompt('Ваше імʼя:');
let MiddleName = prompt('Ваше імʼя по батькові:');
let old = +prompt('Скільки вам років?');

console.log(`${FirstName} ${MiddleName} ${old}`);























