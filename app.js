//1 Переменные
// var name = 'Maks'
// устаревший способ. в дальнейшем можно
// изменять значение переменной
// Пример: 

// name

// console.log(name)
//camelCase
// const firstName = 'Maks'
// const lastName = 'Kashcheev' //string
// const age = 23
// предпочтительно использование тега const 

// let age = 23 //number
// так же можно изменять переменную аналогично с тегом var

// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'ffff' ошибочная переменная т.к. использовано зарезервиванное слово

// const withNum5 = '5'
// const 5withNum = '5' так же ошибочно, из-за цифры в начале

// 2. Мутирование
// console.log('Имя человека:' + firstName + ',а возраст человека : ' + age)
// alert('Имя человека:' + firstName + ',а возраст человека : ' + age)

// const lastName = prompt( message: 'Введите Фамилию')
// alert(firstName + ' ' + lastName)

// 3. Операторы
// let currentYear = 2022
// const birthYear = 1999

// // const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32

// // c = c + a
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)

// 4. Типы данных
// const isProgrammer = true
// const name = 'Maks'
// const age = 23
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)

// 5. Приоритет операторов
// const fullAge = 23
// const birthYear = 1999
// const currentYear = 2022
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 23 >= 24 => true
// console.log(isFullAge)

// 6. Условные операторы
// const courseStatus = 'pending' // ready, fale, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в стадии разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady === true) {
//     console.log('Все готово')
// }else {
//     console.log('Все не готово')
// }

// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7. Логические операторы
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND

//8. Функции

// function calculateAge(year) {
//     return 2022 - year
// }

// // console.log(const myAge = calculateAge(year 1999))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени' + name + 'сейчас имеет возраст' + age)
//     } else {
//         console.log('Вобще-то это уже будещее!')
//     }

// }

// logInfoAbout( name: 'Максим', year: 1999)

//9. Массивы 
// const cars = ['BMW', 'Lada', 'Fiat']
// // const cars = new Array(items: 'BMW', 'Lada', 'Fiat')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[0])

// cars[0] = 'Mercedes'
// console.log(cars)
// cars[3] = 'BMW'
// console.log(cars)

//10. Циклы
// const cars = ['BMW', 'Lada', 'Fiat']

// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

//11. Объекты
// const person = {
//     firstName: 'Maks',
//     lasnName: 'Kashcheev',
//     year: 1999,
//     languages: ['Ru', 'En'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// console.log(person.lastName)
// const key = 'languages'
// console.log(person[key])
// person.isProgrammer = true
// console.log(person)
// person.hasWife = true
// console.log(person)
// person.greet()