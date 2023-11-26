// Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    function square(a, b) {
        return a * b;
    }

    let length = square(10, 20);
    document.write(length);

}

// Створити функцію яка обчислює та повертає площу кола з радіусом r
{
    function circle(a) {
        return a * a * 3.14;
    }

    let arguments = circle(5)
    document.write(arguments);
}

// Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    function cylinder(h, r) {
        return 2 * 3.14 * r * (h + r);
    }

    let arguments = cylinder(5, 2);
    document.write(arguments);
}

// Створити функцію яка приймає масив та виводить кожен його елемент
{
    let arr = ['hello', 123, 345, 567, 'bye']

    function array(users) {
        for (const user of users) {
            document.write(user)
        }
    }

    array(arr);
}

// Створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    function paragraph(text) {
        document.write(`<div> <p>${text}</p> </div>`)
    }

    paragraph('Hello');
}

// Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    function ul(text) {
        for (let i = 0; i < 3; i++) {
            document.write(`<div>
    <ul>
    <li>${text}</li>
    </ul>
    
    </div>`)
        }
    }

    ul('Hi');
}

// Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    function ul(text, value = 3) {
        for (let i = 0; i < value; i++) {
            document.write(`<div>
    <ul>
    <li>${text}</li>
    </ul>
    
    </div>`)
        }
    }

    ul('Hi');
}

// Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
{
    let arr = [123, 345, 567, 789, 'hello', true, 'hi', false, 'bye'];

    function elements(a) {
        for (const aElement of a) {
            document.write(`<div>
    <ul>
    <li>${aElement}</li>
    </ul>
    </div>`)
        }
    }

    elements(arr);
}

// Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
{
    let users = [
        {id: 1, name: 'Roman', age: 26},
        {id: 2, name: 'Olena', age: 32},
        {id: 3, name: 'Oksana', age: 33}
    ];

    function array(user) {
        for (const userElement of user) {
            for (const userElementKey in userElement) {
                document.write(`<div> ${userElementKey}: ${userElement}: </div>`);
            }
        }
    }

    array(users);
}


// Створити функцію яка повертає найменьше число з масиву
{
    let arrayNumber = [123, 234, 345, 456, 567, 678, 789, 890, 90, 89, 67, 54, 3, 6, 2, 7, 3, 4, 6, -1000000000];

    function number(arguments) {

    }

    number(arrayNumber)
}


// Створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
{
    let arrayNum = [123, 234, 456,567,678,789,890];

    function num(arr) {
        let result = 0;

        for (let arrElement of arr) {
            result = result + arrElement;
        }
        return result

    }

    document.write(num(arrayNum));

}


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250