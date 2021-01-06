'use strict';

let money,
    time,
    result,
    expensesOne,
    expensesTwo;

money = +prompt("Ваш бюджет на месяц? ", "10");
time = prompt("Введите дату в формате YYYY-MM-DD", "");
expensesOne = prompt("Введите обязательную статью расходов в этом месяце", "");
expensesTwo =prompt("Во сколько обойдется?", ""); 

let optionalExpenses = {

}

let expenses = {
    first : expensesOne,
    second : expensesTwo
}

let income = [

]

let appData = {
    budget : money,
    timeData : time,
    obras : expenses,
    neobras : optionalExpenses,
    inCome : income
}
result = appData.budget / 30;
alert(result);