var giorni = new Array();
console.log(giorni);
giorni = new Array(6);
console.log(giorni);
giorni[10] = new Array("testo");
console.log(giorni);

console.clear();

var giorni = new Array();
console.log(giorni);

giorni = new Array('');
console.log(giorni);
console.log(giorni[0]);

giorni = new Array(3, 3);
giorni[4] = 5;
console.log(giorni);

console.clear();
//modo letterale

function Array(){
    return false;
}
var giorni = new Array();
console.log(giorni);

var days =[];
console.log(days);
console.log(days.length);

console.clear();

var days = [];
days =  [7];
days = [7, 'testo', false, [2, 6, 3,], 5,];
console.log(days.length);
//console.log(days[2]);
//console.log(typeof days[0]);
console.clear();

//prioprieta length
var days = ['lunedi', 'martedi', 'mercoledi',];
console.log(days);
days [9] = 'testo'
console.log(days.length)
days.length = 3;
console.log(days);

console.clear();

let arrUno = [
    'oksana',
    'roma',
    'lida',
]
console.log(arrUno[2]);

console.clear();

let arrDue = [
    "oksana",
    {
        age: 29,
        type: 'numero',
    },
    false,
    function () {
        console.log('ciao mi chiamo lida');
    }
]
console.log(arrDue);
console.log(arrDue[0]);
console.log(arrDue[1].age);
console.log(arrDue[3]());
arrDue[3]();

console.clear();

let matrix = [
    [2, 3, 6,7],
    [5, 6, 8,0],
    [1, 2, 3, 4],
    [0, 9, 8, 7],
];
console.log(matrix);
console.log(matrix[3][2]);

console.clear();
let name = ['oksana', 'lida', 'lida'];
console.log(name);