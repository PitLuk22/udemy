/*let num = 20;

function showFirstMessage (text) {
    alert (text);
    console.log(num);
}
showFirstMessage ('Hello World!');
console.log(num);
*/

/*function calc (a , b) {
    return (a + b);
}
console.log(calc(3, 4));

console.log(calc(8, 4));
*/

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) 
    && (a != "") && (b != "") && a.length < 50) {
        console.log("done");
    appData.expenses[a] = b;   
        } else {

    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Низкий уровень заработка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень заработка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень заработка");
} else {
    console.log("Произошла ошибка!");
};




