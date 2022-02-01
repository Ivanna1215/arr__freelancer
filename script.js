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

// finf i findIndex

let arr = [
    {name: 'Ivanna', age: 31},
    {name:'Anna',age:9},
    {name: 'Max' ,age:'I will not say'}
];
// let resultOne = arr.find(function(item,index,array){
//     return item.age ===31;
// }) 
let resultOne = arr.find (item=>item.age === 31);
console.log (resultOne);