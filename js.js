let num = 50;

if (num<49) {
console.log("False!");
}
else if (num > 100) {
    console.log('Much!');
}
else {
    console.log('True!');
}

(num == 50) ? console.log('True!') : console.log("False!"); // Тернарный код

switch (num) {
    case num < 49: 
        console.log("False!");
        break;
    case num > 100:
        console.log('Much!');
        break;
    case num > 80:
        console.log('To Much!');
        break;
    case 50: // Эквивалентно case == 50: но в команде swith так нельзя!!!
        console.log('True!');
        break;
    default:
        console.log("somthing was wrong!");
        break;
}

//let num = 50;
/*while (num < 55) {
    console.log (num);
    num++;
}*/

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue; // результат будет выглядеть так: 1 2 3 4 5 _ 7, то есть мы пропускаем цифру 6
    }
    console.log(i);
}

