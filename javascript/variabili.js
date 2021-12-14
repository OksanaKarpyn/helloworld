var $ ='test';
var _ ='test';

var s ='test';
console.log($);
console.log(_);
console.log(s);
var nomeUtente = 'oksana';
var nomeutente = 'lida';
console.log(nomeutente, nomeUtente)
console.clear();
//undefined
var test;
console.log(test);
//string
test = 'oksana';
console.log(test,  ' => ', typeof test);
//number
test = 29;
console.log(test, ' => ', typeof test);
//array
test = [2, 4];
console.log(test, ' => ', typeof test);
test = ['oksana'];
console.log(test, ' => ', typeof test);
test = {name : 'oksana', lastName : 'karpyn'}
console.log(test.name, test.lastName,  ' => ', typeof test);
console.clear();
//function
test = function(){
    return "test"
}
console.log( test, '=>' ,  typeof test);
console.log( test + '=>' +  typeof test);
console.log( test(), '=>' ,  typeof test);
console.log( test() + '=>' +  typeof test);
//boolean
test = false;
console.log(test, '=>', typeof test);
console.log( test + '=>' + typeof test);
test = true;
console.log(test, '=>', typeof test);
console.log( test + '=>' + typeof test);

console.clear();
// variabili string
var name = 'oksana';
var lastName = 'karpyn';
var address = "via \"pane bianco\"";
var address2 = '"vai pane bianco"';
console.log(address);
console.log(address2);
console.log(name, lastName);

console.clear();
var note = "holla "+
  "hoolla "+
"holla";
console.log(note);
console.clear();
var note2 = "holla\t\t"+
   "\tholla\n"+
     "holla1\r";
console.log(note2);
console.clear();
var note1 = "\u0045";
var note2 ="\u0046";
console.log(note2);
console.log(note1);

console.clear();
//concatenare le stringhe

var verso1 = "cioa mi chiamo oksana,\n";
var verso2 = "io ho 29 anni\n";
var verso3 = "ho un marito meraviglioso!\n";
var strofa = verso1.concat('<p>', verso2, verso3, '</p>');
console.log(strofa);
strofa1 = verso1, + verso2 + verso3;
console.log(strofa1);

console.clear();
//concat num+ string
var result = 1 + '10';
console.log(result);
var result1 = '1' + 10;
console.log(result1);
var result2 =(+'1') + 10;
console.log(result2);

console.clear();
//number 
var myNumber = 29;
console.log(typeof(myNumber));
result = myNumber + 10;
console.log(result);
 console.clear();

 var numDecimale = 0.4 + 0.4;
 console.log(numDecimale);
 var numDecimale1 = 0.4 + 0.4;
console.log((0.4*10 + 0.4*10) / 10);
var numDecimale2 = 0.4 + 0.4;
console.log(numDecimale.toFixed(2));
console.clear(); 

 // NAN non e il numero
 //console.log(1 === 1);
 //console.log(NaN === NaN);//NaN nn e un NaN
 //const result = 10 * 'testo';
 //console.log(result);
 //if(result === Nan){
   //  console.log(none un numero);
 //}
 //console.log(isNaN(result));
// console.log(Number.isNaN(result));
var mioValore = false;
var valoreDue = true;
console.log(mioValore);
mioValore = "False";
valoreDue = "True";
console.log(valoreDue);
console.log(mioValore);
console.clear();
//raper trasf.boll.in object
var bool = Boolean(6>7);
console.log(bool);
var bool1 = Boolean(6<7);
console.log(bool1);
console.clear();
var boolObject = new Boolean("ciao");
console.log(boolObject);
var boolObject1 = new Boolean("ciao");
var boolObject2 = Boolean("ciao");
console.log( boolObject2 == boolObject1);
console.log(boolObject2 === boolObject1);
console.clear();
//castare boolean
var valInt = 12;
varInt = !!valInt;
console.log(varInt);
console.log("valore di valInt=" + varInt);
console.clear();
var test = new Boolean(0);
//sequenti valori sono false
//0,'',null,undefined,
console.log(test);
console.log("test"+ test);
console.log(typeof(test));
if(test){
 //   console.log("testo e vero")
}
if(test.valueOf()){
    console.log("testo e vero");
}