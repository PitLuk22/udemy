let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof (a) === "string") && (typeof (a) != null) && (typeof (b) != null) &&
            (a != "") && (b != "") && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
        } else {
            console.log("Bad result");
            i--;
        }
    }
}
chooseExpenses();

// Используем цикл WHILE
/*
let i = 0;
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) 
    && (a != "") && (b != "") && a.length < 50) {
       console.log("Done");
       appData.expenses[a] = b;  
    } else {
        console.log("Bad result");
        i--;
    } 
    i++;
};
*/
// Используем цикл DO...WHILE

/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) 
    && (a != "") && (b != "") && a.length < 50) {
       console.log("Done");
       appData.expenses[a] = b;  
    } else {
        console.log("Bad result");
        i--;
    }
    i++;
}
while (i < 2);
*/

function detectDailyBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + " руб");
}
detectDailyBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень заработка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень заработка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень заработка");
    } else {
        console.log("Произошла ошибка!");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Укажите процент по вкладу?");
        appData.monthIncome = (save * percent / 100 / 12).toFixed();
        alert("Доход со вклада в банке: " + appData.monthIncome + " руб");
    }
}
checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i <=3; i++) {
    let questionOptExpenses = prompt ("Статья необязательных расходов?");
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();