console.log('hello');
console.log('mondo');
console.log('1992');
console.log(1992);
console.log('hello' + ' ' + 'mondo');//concatenare string
console.log('hello ' + 'mondo');
console.log('hello' + ' mondo');
console.log('hello' + 'mondo');

console.info('hello');//cntl+ l dovrb.comnt
//alert('ciao');
document.getElementById('out').innerHTML = '555 piace';
document.getElementById('out').innerHTML = 'lidiya 1993';
document.getElementById('out').innerHTML = '<b>lidiya 1993</b>';

document.querySelector('.live').innerHTML = 'vive in italia';
document.querySelector('.paragraf').innerHTML = 'lorem lidia vive a Malta';

document.querySelector('.live').innerHTML = 11;
document.querySelector('#prova').innerHTML = 'vive in ucraina';//si usa #

document.getElementById('prova').innerHTML = 'vive in Ucraina';//non si usa #

//doccument.querySelector('.,#'),document.getElementById(''), sono elemeti che vanno messi dento scatola
//let  a; //let é scatola,a é nome della scatola


//let a = document.getElementsByClassName('paragraf');
//let a = document.querySelector('.paragraf');
//due modi di scrittura
//1
let a = document.querySelector('#prova');
//2
let b;
b = document.querySelector('.paragraf');
a.innerHTML = 9;
b.innerHTML = 'adesso è al lavoro';

//if,else,swich
//let c = 4;
//if (c != 8) {
//    console.log('é vero');
//}
//else {
//console.log('è falso');
//}


let d = 14;
if (d == 18) {
    console.log('benvenuto');
}
if (d <= 15) {
    console.log('fino alle 22:00');
}
else {
    console.log('non puoi entrare');
}