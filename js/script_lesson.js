"use strict";
//Lesson 13;
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('error');

const num2 = 50;

switch (num2) {
    case 49:
        console.log('неверно');
        break;
    case 100:  
        console.log('неверно');
        break;  
    case 50:  
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;            
}