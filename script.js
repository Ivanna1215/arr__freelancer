'use strict'
// Створення масиву
// let arr = new Array ();
// let arr = [];
// let arrOne = [
//     'Ivanna',
//     'Anna',
//     'Oxana',
// ];
// let arrTwo = ['Ivanna','Oxana','Anna'];
// let arrTwo = [
//     'Ivanna',
//     {
//         type:'JS',
//         age:31,
//     },
//     true,
//     function () {
//         console.log ('Hello,Ivanna');
//     }
// ];


// Отримання значень

// let arrOne = [
//     'December',
//     'January',
//     'February',
// ];
// console.log (arrOne[0]);
// console.log (arrOne[1]);
// console.log (arrOne[2]);
// console.log (arrOne[5]);

// let arrTwo = [
//     'Ivanna',
//     {
//         type:'JS',
//         age:31,
//     },
//     true,
//     function () {
//         console.log ('Hello,Ivanna');
//     }
// ]
// console.log (arrTwo);
// console.log (arrTwo[0]);
// console.log (arrTwo[1]);
// console.log (arrTwo[2]);
//  arrTwo[3]();

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log (matrix);
// console.log (matrix [0][1]);

// Довжина масива

// let arrOne = ['December','January','February'];
// console.log (arrOne);
// console.log (arrOne.length);

// Доступ до масиву

// let arr = ['March', 'April', 'May'];
// console.log (arr);

// let arrNew = arr;

// arrNew.length = 2;
// console.log (arr);

// arr[0] = 'December';
// console.log (arr);

// arr[1]='January';
// console.log (arr);

// arr[2]='February';
// console.log (arr);

// arr[3]='March';
// console.log (arr);
// arr.push('April');
// arr.push('May');
// console.log (arr);
// arr.shift();
// console.log (arr);
// arr.shift();
// console.log (arr);
// arr.pop();
// arr.unshift('winter months');
// console.log (arr);

// Видаляэмо елемент

// let arrLast = ['Ivanna', 'Anna','Oxana'];
// arrLast.splice (1,1);
// 1 - це номер елемента з якого починаємо видаляти, 1 - це кількість елементів які необхідно видалити
// console.log (arrLast);

// Видаляємо об'єкт і повертаємо його у перемінну

// let arrTwo = ['June', 'July', 'August'];
// let removed = arrTwo.splice (1,1);
// console.log (removed);

// Заміняємо елементи

// let arrThree = ['June', 'July', 'August'];
// arrThree.splice (0,1, 'Summer months');
// console.log (arrThree);

// Добавляємо елементи
// let arrFour = ['January','February','April'];
// arrFour.splice(2,0,'Spring months','March');
// console.log (arrFour);

// Видаляємо останній елемент
// let arrFive = ['September','Oktober','November'];
// arrFive.splice(1,0,'August','July');
// console.log (arrFive);

// Метод slice
// Cтворюємо новий масив в який копіюємо частинку або весь масив
// Синтаксис arr.slice([start],[end]) не включаючи end

// let arrOne = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
// let arrTwo = arrOne.slice (1,2);
// console.log (arrTwo);
// let arrThree = arrOne.slice (-2,-1);
// console.log (arrThree);

// Копіюємо весь масив
// let arrFour = arrOne.slice();
// console.log (arrFour);

// Метод concat
// Створює новий масив в який копіює дані із інших масивів і доповнює значення в кінці масиву
// let arrOne = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
// let arrTwo = arrOne.concat ('Saturday');
// console.log (arrTwo);

// Пошук в масиві
// Методи indexOf/lastIndexOf i includes
// let arrOne = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
// console.log (arrOne.indexOf('Sunday'));
// console.log (arrOne.indexOf('Tuesday'));
// console.log (arrOne.indexOf('Wednesday',3));
// console.log (arrOne.includes ('Sunday'));

// find i findIndex

// let arr = [
//     {name: 'Ivanna', age: 31},
//     {name:'Anna',age:9},
//     {name: 'Max' ,age:'I will not say'}
// ];
// let resultOne = arr.find(function(item,index,array){
//     return item.age ===31;
// }) 
// let resultOne = arr.find (item=>item.age === 31);
// console.log (resultOne);

// let arr = [
//     {name: 'Ivanna', age: 31},
//     {name:'Anna',age:9},
//     {name: 'Max' ,age:'I will not say'}
// ];

// let resultOne = arr.filter(function(item,index,array){
//     return item.age >=9;
// }) 
// console.log (resultOne);

// let arrOne = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
// console.log (arrOne.sort());

// let arrTwo = [8,22,1];
// console.log (arrTwo.sort());
// console.log (arrTwo.sort((a,b) =>a-b));

// Сортування масивів
// reverse міняє порядок в масиві на зворотній

// let arrOne = ['Monday','Tuesday','Wednesday'];
// console.log (arrOne.reverse());

// Метод arr.map є одним з найкорисніших і найчастіше використовуваних .
// Він викликає функцію кожного елементу масиву і повертає  масив результатів виконання цієї функції
// Синтаксис
// let result = arr.map(function(item,index,array)) {
    // повертає нове значення замість елемента
// });

// let arr = ['Monday', 'Tuesday','Wednesday',];
// let result = arr.map (function(item,index,array) {
    // return item[0];
    // return index;
//     return array;
// })
// console.log (arr);
// console.log (result);

// Методи split i join

// Метод split перетворює строку в масив по заданому разделителю

// Синтаксис str.split (delim)

// let str = 'Monday,Tuesday,Wednesday';

// let arr = str.split (',');
// console.log (arr);

// let arrTwo = str.split (',',2);
// console.log (arrTwo);

// Метод join оперетворює масив у строку із по заданим розділовим знаком

// let arr = ['Monday','Tuesday','Wednesday'];
// let srt = arr.join('/');
// console.log (srt);

// let arrTwo = ['Monday','Tuesday','Wednesday'];
// console.log (String(arrTwo));

// Перевірка Array.isArray()

// let obj = {};
// let arr = [];

// console.log (typeof obj);
// console.log (typeof arr);

// if (Array.isArray (obj)) {
//     console.log ('It is array')
// } else {
//     console.log ('Error')
// }

// Перебір елементів

// let arr = ['Monday','Tuesday','Wednesday'];
// console.log (arr.length);

// цикл for

// for (let i = 0; i<arr.length; i++) {
//     console.log (arr[i]);
// }

// let arr = ['Monday','Tuesday','Wednesday'];
// for (let arrItem of arr) {
//     console.log (arrItem);
// }

// for Each 

// let arr = ['Monday','Tuesday','Wednesday'];
// arr.forEach (function (item,index,array) {
//     console.log (`${item} is on ${index} positions in ${array}`)
// })

// arrow function
// arr.forEach ((item,index,array)=>{
//     console.log (`${item} is on ${index} positions in ${array}`)
// })

// let arr = ['Monday','Tuesday','Wednesday'];
// arr.forEach (show);

// function show(item) {
//     console.log(item);
// }

// Методи reduce/reduceRight

// let arrOne = [1,2,3,4];
// let reduceValueOne = arrOne.reduce (function(previousValue,item,index,array){
//     return item + previousValue;  
// },0);
// console.log (reduceValueOne);

// Step 1
// previousValue = 0
// item = 1
// їх сума = 1

// Step 2
// previousValue = 1
// item = 2
// їх сума = 3

// Step 3
// previousValue = 3
// item = 3
// їх сума = 6

// Step 4
// previousValue = 6
// item = 4
// їх сума = 10


// let arrTwo = ['Tuesday','Wednesday','Thursday',];

// Якщо не вказати початкове значення (perviousValue=Thuesday)
// А робота методу почнеться з другого елемента (item=Wednesday)

// let reduceValueTwo = arrTwo.reduce (function(previousValue,item,index,array){
//     return `${item},${previousValue}`;
// });
// console.log (`day: ${reduceValueTwo}`);

// Задача №1.
// Какое число (длинну) мы получим?
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);
// console.log (arr);

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/

// let arrOne = ['Tuesday','Thursday'];
// console.log (arrOne);
// arrOne.push ('Saturday');
// console.log (arrOne);
// arrOne[2]='Friday';
// console.log (arrOne);
// arrOne[1]='Monday';
// console.log (arrOne);
// arrOne.shift();
// console.log (arrOne);
// console.log (arrOne.shift());
// arrOne.unshift('Saturday','Sandy');
// console.log (arrOne);

// Задача №3.
// Удалить элемент 'Friday' и возвратить его в переменную
// let arr = ['Thursday', 'Friday', 'Saturday',];
// let removed = arr.splice(1,1);
// console.log (removed);
// console.log (arr.slice(0,1));
// let arrTwo = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sandy'];
// console.log (arrTwo);
// let weekend = arrTwo.splice(-2,2)
// console.log (weekend);
// let day = arrTwo.splice(0,2);
// console.log (day);

// Задача №4.
//Сделать из строки массив
// let str = 'Thursday,Friday,Sanday';
// let arr = str.split (',');
// console.log (arr);
// console.log (str);

// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
// 9
// Якщо не вказати початкове значення (perviousValue=9)
// А робота методу почнеться з другого елемента (item=2)
