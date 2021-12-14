// alert('hello')

// variabili

// var name = 'oksana'//string
// const lastName = 'karpyn'
// let age = 26//number
// age =29
// const isProgrammer = true//boolean
// console.log(isProgrammer);
// const firstName = 'oksana'
// const lastName = 'karpyn'
// const birthYear = 1992
// const correntYear = 2021
//
// console.log(firstName + lastName ,   birthYear - correntYear);

// const _ = 'private'
// const $ = 'value'
// const if ='non si puo'err
// const whitNum5 = 5
//const 5whitNum = 5// nosi scrive cosi err

// mutazione

// const name = 'romana'
// const firstName = 'oksana'
// const age = 25
// alert('nome della persona:' + name + ',eta sua è: '+ age)
// console.log(age)

// const firstName = 'oksana'
// const lastName = 'karpyn'

//  const lastName = prompt( 'inserisci nome')// non funziona
// alert('firstName')

//operatore

// const currentYear = 2021
// const birthYear = 1992
// const age = currentYear -birthYear
// console.log(age);

// const a = 10
// const b = 2
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let currentYear = 2021
// console.log(currentYear++);
// console.log(currentYear);
// console.log(++currentYear);
// console.log(--currentYear);

//  const a = 10
//  const b = 2
//  let c = 20
// c = c + b
//  // c += b
//  // c *= b
//  c /= 2
// console.log(c);


//4 tipi di dati
// const isProgrammer = true
// const name = 'oksana'
// const age = 29
// let x
// console.log(typeof isProgrammer);//boolean
// console.log(typeof name);//srting
// console.log(typeof age);//number
// console.log(typeof x);//undefined
// console.log(typeof null);//object

// precedente operatore
// const fullAge =29
// const correntYear = 2021
// const birthYear = 1992
// const isFullAge = correntYear - birthYear >= fullAge
// console.log(isFullAge);

 // condizione operatore
//  const courseStatus = 'fall'// ready, fall,pending
//  if (courseStatus === 'pending') {
//    console.log('corso non e ancora finito');
//  }
//  else if (courseStatus === 'ready') {
//    console.log('corso finito');
//  }
// else {
//   console.log('corso falito');
// }

//perxhe si mette uno due tre = == ===?
// const num1 = 24// number
// const num2 = '24'//string
// console.log(num1 === num2);
// const isReady = true
// if (isReady === true){
//   console.log('e vero');
// }
// const isReady = true//boolean
// if (isReady){
//   console.log('e vero');
// }
// const isReady = false
// if (isReady === true){
//   console.log('e vero');
// }
// else {
//   console.log('non e pronto');
// }
// const isReady = true
// isReady ? console.log('tutto pronto') : console.log('non e pronto')//come sistema riescie a capire scorciatoia

//funzioni

// function calculateAge(year){
//   return 2021-year
// }
// console.log(calculateAge(1992));
// console.log(calculateAge(1995));
// console.log(calculateAge(1993));
// console.log(calculateAge(2001));

// function infoAboutMan(name, year){
//   const age = calculateAge(year)
//   if (age > 0)
//   console.log( 'persona con nome' + name + ' ha' + age);
// else {
//   console.log('e futuro');
// }
// }
// infoAboutMan('oksana' , '1992')
// infoAboutMan('romana' ,'1995')
// infoAboutMan('romana' ,'2023')

//array  massivi
// const cars = ['fiat', 'kia', 'alfa']
// console.log(cars);
//
// const cars = new Array ('fiat', 'kia', 'alfa')
// console.log(cars);

// const cars = ['fiat', 'bmw', 'kia']
// console.log(cars.length);//length per sap.qnt elmnt
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[2]);
// cars [0] = 'rerrari'
// cars [cars.length] = 'fiat'
// console.log(cars);

// cicli
// const nomi = ['lida', 'roma', 'oksana','vasyl']
// for (let i = 0; i < nomi.length; i++) {
//   const nome = nomi[i]
//   console.log(nome);
// }

// const nomi = ['oksana', 'lida', 'roma']
// for (let nome of nomi) {
//   console.log(nome);
// }

//object
// const person ={
//   firstName: 'oksana',
//   lastName: 'karpyn',
//   age: 29,
//   birthYear: 1993,
//   languages: ['ucraino', 'italiano', 'russo', 'inglese', 'tedesco'],
//   marrid: true,
//   greet:function(){
//     console.log('from person');
//   }
// }
// console.log(person.firstName);
// console.log(person ['firstName']);//stringa
// const key = 'marrid';
//
// console.log(person[key]);
// console.log(person.languages);
// person.marrid = false
// person.isProgrammer = true
// console.log(person);
//
// person.greet();
