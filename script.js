// Обьекты

// Структура создания обьекна let henbane обекта = {ключ: значение}

//let obj = {
//  name: 'Zafar',
//  age: 22
//}
//console.log(obj);


//***** Start *****

// type.of - делает проверку на тип данных

//let obj = {
//name: 'Zafar',
//age: 22
//}

//console.log(typeof obj);


//***** Start *****

// Добавление ключа есть 2 способа
// 1) Добавление ключа через . точку

//let obj = {
//    name: 'Zafar',
//    age: 22
//}
//obj.city = 'Tashkent'

//console.log(obj.name);

// Когда хотите получить значение ключа пишете имя обьекта после пишете точка после имя ключа

// 2) Добавление ключа через [] квадратные скобки
//let obj = {
//    name: 'Zafar',
//    age: 22
//}
//obj['city'] = 'Tashkent'

//console.log(obj['city']);

//***** Start *****

//Функция созданная внутри обьекта называется методом

// let person = {
//   name: 'Zafar',
//   age: 22,
//   isMarried: false,
//   ageAdd() {
//     return this.age * 2
//   }
// }

// console.log(person.ageAdd())

// ************** End ********************

// ********** Перебираем через for in ************

// let users = {
//   1: {
//     name: 'FrontEnd',
//     age: 25
//   },
//   2: {
//     name: 'BackEnd',
//     age: 30
//   }
// }

// for (let key in users) {
//   for(let newKey in users[key]){
//     console.log(users[key][newKey]);
//   }
// }

// ************** End ********************

// ********** Перебираем через двойное for in ************

// let family = {
//   mother: {
//     name: 'Sara',
//     age: 455
//   },
//   father: {
//     name: 'Eliot',
//     age: 50
//   }
// }

// for(let key in family) {
//   for (let keynew in family[key]) {
//     console.log(family[key][keynew]);
//   }
// }

// ************** End ********************

// ******* // Для добовление ключа son к family [тут пишем с ' ' ] ********

// let family = {
//   mother: {
//     name: 'Sara',
//     age: 455
//   },
//   father: {
//     name: 'Eliot',
//     age: 50
//   }
// }

// family['son'] = { // Для добовление ключа [тут пишем с ' ' ]
//   name: 'Samir',
//   age: 10
// }
// ************** End ********************