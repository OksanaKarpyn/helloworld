console.log('hello');
console.log('mondo');
console.log('1992');
console.log(1992);
console.log('hello' + ' ' + 'mondo');//concatenare string
console.log('hello ' + 'mondo');


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


//let d = 14;
//if (d == 18) {
//  console.log('benvenuto');
//}
///if (d <= 15) {
// console.log('fino alle 22:00');
//}
//else {
//  console.log('non puoi entrare');
//}

// && -e, ||-o.
const button = document.querySelector('button');
const input = document.querySelector('.age');
button.onclick = () => {
    let num = input.value;
    if (num >= 18 && num < 45) {
        console.log('benvenuto');
    }
    else if (num >= 50) {
        console.log('sei sicuro che vuoi entrare?');
    }
    else {
        console.log('non puoi entrare');
    }

    switch (num) {
        case 17:
            console.log('aspetta un anno');
            break;
        case 23:
            console.log('adesso puoi')
        default:
            console.log('va bene');
    }
}

let d = 8;
console.log(d != 6 && d > 7);


//let sister1 = ['lidiya', 1993, 'november', 09]
//console.log(sister1);
//let sister2 = ['romana', 1995, 'june', 18, 'gemelli'];
//console.log(sister2);
//lungezza dell array
//console.log(sister1.length);
//console.log(sister2.length);
//console.log(sister2[0, 4]);
//sister2[1] = 2021;
//console.log(sister2);

//let numbers = [2, 4, 12];
//let roots = numbers.map(Math.sqrt);
//console.log(roots);

document.querySelector('.btn').onclick = () => {
    console.log(document.querySelector('#inpt').value);
    document.querySelector('.btn').style.backgroundColor =
        document.querySelector('#inpt').value
}

//let input1 = document.querySelector('#inp1_prova').value;//da domandare

document.querySelector('.btn1_prova').onclick = () => {

    console.log(document.querySelector('#inpt1_prova'.value));
    document.querySelector('.btn1_prova').style.backgroundColor = input1
}


document.querySelector('#btn_range').onclick = () => {
    console.log(document.querySelector('#inpt_range').value);
    document.querySelector('#btn_range').onclick =
        document.querySelector('#inpt_range')

}