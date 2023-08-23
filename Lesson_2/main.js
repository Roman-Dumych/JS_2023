// Масиви та об'єкти:
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['hello', 123, 234, 345, 456, 567, 678, 789, 'hi', 'bye']
console.log(arr);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    let book1 = {
        title: 'Гарі Поттер',
        pageCount: 500,
        genre: 'Фантастика'
    };

    let book2 = {
        title: 'Тіні забутих предків',
        pageCount: 400,
        genre: 'Драма'
    };

    let book3 = {
        title: 'Українська мова та література',
        pageCount: 600,
        genre: 'Навчальний посібник'
    };

    console.log(book1, book2, book3);
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
{
    let book1 = {
        title: 'Гарі Поттер',
        pageCount: 500,
        genre: 'Фантастика',
        authors: [
            {
                name: 'Джоан Роулінг',
                age: 32
            }
        ]
    };

    let book2 = {
        title: 'Тіні забутих предків',
        pageCount: 400,
        genre: 'Драма',
        authors: [
            {
                name: 'Михайло Коцюбинський',
                age: 37
            }
        ]
    };

    let book3 = {
        title: 'Українська мова та література',
        pageCount: 600,
        genre: 'Навчальний посібник',
        authors: [
            {
                name: 'Олена Якименко',
                age: 33
            }
        ]
    };

    console.log(book1, book2, book3);
}

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача.
let users = [
    {
        name: 'Roman',
        username: 'Roma',
        password: '1234'
    },

    {
        name: 'Oleg',
        username: 'Oleg',
        password: 'sdfsdfsdf'
    },

    {
        name: 'Alina',
        username: 'Alya',
        password: '234234werewr'
    },

    {
        name: 'Oksana',
        username: 'Ksenia',
        password: '546456fghfh'
    },

    {
        name: 'Iryna',
        username: 'Ira',
        password: 'dfgdfgrty324234'
    },

    {
        name: 'Anton',
        username: 'Anton',
        password: '65756756dsfsdfs'
    },

    {
        name: 'Maria',
        username: 'Mary',
        password: '123123bnmbmnb'
    },

    {
        name: 'Vladislav',
        username: 'Vlad',
        password: '456456dfgdfg'
    },

    {
        name: 'Uliana',
        username: 'Ulya',
        password: '4645345dfgfdgr4'
    },

    {
        name: 'Olena',
        username: 'Olena',
        password: '4564634sdgdfgdfghdg'
    }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3.
let x = 0;

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 1;

if (time >= 1 && time <= 15) {
    console.log('Перша четверть')
} else if (time >= 16 && time <= 30) {
    console.log('Друга четверть')
} else if (time >= 31 && time <= 45) {
    console.log('Третя четверть')
} else if (time >= 46 && time <= 60) {
    console.log('Четверта четверть')
} else if (time < 1 && time > 60) {
    console.log('Невірне значення')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1;

if (day <= 10) {
    console.log('Перша декада')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада')
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада')
} else if (day > 31) {
    console.log('Невірне значення')
}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (1) {
    case 1:
        console.log('Monday')
        break;
    case 2 :
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Невірне значення')
}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let value1 = 1;
let value2 = 2;

if (value1 > value2) {
    console.log(value1)
} else if (value2 > value1) {
    console.log(value2)
} else if (value1 === value2) {
    console.log('Числа рівні')
}

// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)
{
    let x = 0;
    x = x || 'default';
    console.log(x)

}

{
    let x = '';

    if (x = 0) {
        x = 'default'
    } else if (x = 'false') {
        x = 'default'
    }
}
// З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}





