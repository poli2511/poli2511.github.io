'use strict'

function lab1_1() {


    let age, gender;

    age = prompt('Введите свой возраст: ', '');
    if (age > 17)
        gender = prompt('Введите свою гендерную принадлежность (М/Ж): ', '');

    if (age >= 0 & age <= 17) {
        alert("Вам работать ещё рано — учитесь");
    } else if ((age >= 18 & age <= 59 & gender == 'М') || (age >= 18 & age <= 54 & gender == 'Ж')) {
        alert("Кто хорошо работает - тот хорошо ест)) (но это не точно)");
    } else if ((age >= 60 & age <= 64 & gender == 'М') || (age >= 55 & age <= 59 & gender == 'Ж')) {
        alert("Вы ещё живы? Скоро пенсия!");
    } else if ((age > 64 & gender == 'М') || (age > 59 & gender == 'Ж')) {
        alert("Молодчяра! Можно отдыхать.")
    } else alert("Ты либо не можешь посчитать сколько тебе лет, либо тебе пора в Европу.")
}

function lab1_2() {
    
    /*

    1 ворона
    2 вороны
    5 ворон 

    */


    var num = prompt('Сколько-сколько говоришь их на ветках..?', '');
    var n = num % 100;
    var n1 = num % 10;
    if (n1 == 1 && n != 11 && n >= 10) {
        alert('на ветке ' + num + ' ворона');
    } else if (n >= 10 && n <= 20 || n1 >= 5 && n1 <= 9) {
        alert('на ветке ' + num + ' ворон');
    } else if (n1 > 1 && n1 < 5 && n >= 10) {
        alert('на ветке ' + num + ' вороны');
    }
}

function lab1_3() {
    let ans;
    do {
        ans = prompt('введи число больше 100: ', '');
        if (ans.key == null) break;
    } while (ans <= 100);
}       


function lab1_4() {
    let n = prompt("до какого простые искать будем: ", '');

    for (let i = 2; i <= n; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i%j==0)
                {
                    flag=0;
                    break;
                }
            }
        }
        else if (i != 2) flag = 0;
        if (flag==1) {console.log(i + '\n');}
    }
}

function lab1_5() {
    let n = 6;
    let m = prompt('Введите высоту матрицы: ', '')
    

    var matrix = new Array(m);
    for (var i = 0; i < m; i++) {
        matrix[i] = new Array(n);
    }
    let flag = 0;
    for (let i = 0; i < m; i++) {
        if (flag <= 2) {
            for (let j = 0; j < n; j++) {
                if (((j == 3 || j == 4) && flag == 0) || ((j == 2 || j == 3) && flag == 1) || ((j == 1 || j == 2) && flag == 2)) matrix[i][j] = 'cat' 
                else matrix[i][j] = 'dog';
            }
        }
        if (flag > 2) {
            for (let j = 0; j < n; j++){
                if (((j == 2 || j == 3) && flag == 3) || ((j == 3 || j == 4) && flag == 4)) matrix[i][j] = 'cat' 
                else matrix[i][j] = 'dog';
            }
        }
        flag += 1;

        if (flag == 4) flag = 0;
    }
    console.log(matrix);
}
