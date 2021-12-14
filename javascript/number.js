// //number
// // const num = 24//integer
// // const float = 24.24//float
// // const pow = 10e3//sgn.10e 3 000
// // console.log(pow);
//
// const num = 24//integer
// const float = 24.24//float
// const pow = 10e3//sgn.10e 3 000
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);//si prendeformula sotto
// // console.log(Math.pow( x: 2, y: 53) - 1);//che nn funziona
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
// console.log('1 / 0', 3 / 0);
// console.log(Number.NaN);//nn e numero not a number
// console.log(typeof NaN);
// // console.log(2 / undefined);
// const variabile = 2 / undefined
// console.log(isNaN(variabile));
// console.log(Number.isNaN(variabile));
// console.log(Number.isNaN(14));
// //se num inf.po avvr fine
//  console.log(Number.isFinite(Infinity));
//  console.log(Number.isFinite(346));
 // const stringInt = '34';
 // const stringFloat = '37.36';
 // console.log(stringInt + 2);
 // console.log(Number.parseInt(stringInt) + 2);
 // console.log(parseInt(stringInt) + 2);
 // console.log(Number(+stringInt) + 2);
//
//  // console.log(parseInt(stringFloat) + 2);//NON FNZ xke inter
//
//  console.log(parseFloat(stringFloat) + 2);//analogo di valori quelli interi

// console.log(0.4 + 0.2);//0.6 lo pensi tu ma
// console.log((2 / 5) + (1 / 5));
//
// console.log(0.4 + 0.2);
// console.log((0.4 + 0.2).toFixed(1));//string
// console.log(+(0.4 + 0.2).toFixed(1));//number
// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

//BigInt
// console.log( typeof 900719925474099199);//number
// console.log( typeof 900719925474099199n);//bigint
// // BigInt lavora solo con bigint numeri grandi
// console.log(900719925474099199n + 90071992547409919999999976765n);
// console.log(900719925474099199n - 90071992547409919999999976765n);
// console.log(- 90071992547409919999999976765n);
// // console.log(9007199254740991999999997.6765n);//non funz nn e intero

// console.log(10n -4);//err nn si fa

// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);//2.5n arotonda= 2n

//Math
// console.log(Math.E);
 //console.log(Math.PI);
// console.log(Math.sqrt(  25));//5
// console.log(Math.pow(5, 3));//125
// console.log(Math.abs(-42));
// console.log(Math.max(19, 38, 37, 9658));
// console.log(Math.max(19, 38, 37, 9658));
// console.log(Math.floor(4.9));//arrtnd giu
// console.log(Math.ceil(4.9));//arrtnd su
// console.log(Math.round(4.4));//arrtnd vcn al intera cifra
// console.log(Math.trunc(4.9));// arrtnd su
// console.log(Math.random());//butta cifre casulali

//esempio
// function getRandomBetween(min, max) {
//   return Math.random() * (min, max) + min;
// }
// console.log(getRandomBetween(10, 25));
//se vogliamo arrotondare
//
// function getRandomBetween(min, max) {
//   return (Math.floor(Math.random() * (min, max + 1) + min));//fnz con 1 e snz 1?
// }
// console.log(getRandomBetween(10, 42));
