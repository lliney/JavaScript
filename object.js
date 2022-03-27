// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// console.log(`user ${typeof (user)}`);
// console.log( user);
// console.log(typeof(user.name) );
// delete user.name;




// function isEmpty(obj) {
//     for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
 
// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// function sumSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += (obj[key]);
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries));

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
        
//         if (typeof (obj[key]) === 'number') {
//             obj[key] *= 2;
//         }
//         console.log(typeof(obj[key]));
//     }

// }

// (multiplyNumeric(menu));
// console.log(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


// let calculator = {
//   // ... ваш код ...
//     read() {
//         a: prompt('a=');
//         b: prompt('b=');
//     }
// };

// calculator.read();
// console.log(calculator.a);
// // alert( calculator.sum() );
// // alert( calculator.mul() );


// const str = '123456';
// console.log(str);
// console.log(str.split(''));
// let arr = (str.split(''));
// console.log(arr);


function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = (message.split(delimeter));
  // Change code above this line
  return words;
}

console.log(splitMessage('12345', ''));