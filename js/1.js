"use strict";
function vozrast_pol() {
    console.clear()
    let age,gender;
age = prompt('Сколько вам лет?');
gender = prompt('Вы мужчина или женщина?');
if ((age>=0 && age <= 17)&&(gender=='мужчина' || gender=='женщина')){
    alert('Вам работать ещё рано — учитесь!');
}  else if ((age>=18 && age <= 59) && gender=='мужчина'){
    alert('Вам ещё работать и работать!');
} else if ((age>=18 && age <= 54) && gender=='женщина'){
    alert('Вам ещё работать и работать!');
}else if ((age>=60 && age < 65) && gender=='мужчина'){
    alert('Скоро пенсия!');
} else if ((age>=55 && age < 60) && gender=='женщина'){
    alert('Скоро пенсия!');
}  else if (age >= 65 && gender=='мужчина'){
    alert('Вам пора на пенсию!');
} else if (age >= 60 && gender=='женщина'){
    alert('Вам пора на пенсию!');
}  else {
    alert('Да кто ты такой?')
}
}

function crow() {
    console.clear()
    let num, message, mod;
    num = +prompt('Введите количество ворон', 1);
    mod = num % 100;
    if (mod > 10 && mod < 20 ) {
        message = `На ветке сидит ${num} ворон`;
    } 
    else {
        switch (num % 10) {
            case 1:
            message = `На ветке сидит ${num} ворона`;
                break;
            case 2:
            case 3:
            case 4:
            message = `На ветке сидит ${num} вороны`;
                break;
            default:
                message = `На ветке сидит ${num} ворон`;
                break;
        }

    }
    alert(message);
}

function onKeydown(event, num) {
    if (event.code === 'Escape') {
        num = null;
        return;
    }
}
function hundred() {
    console.clear()
    let num;
    do {
        num = prompt('Введите число большее 100');
        if (num === null) return; // выход из функции, если нажали "Отмена"
        if (num === '') continue; // продолжаем цикл, если введена пустая строка
    } while (num <= 100);
    alert(num);
    document.addEventListener('keydown', function(event) {
        onKeydown(event, num);
    });
}

function simple() {
    console.clear()
    let n;
    n = prompt('Введите число большее чем 2');
    easy:
    for (let i = 2; i <= n; i++) { 
    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue easy;
    }
    console.log( i );
    }
}

function catdog() {
    console.clear()
     const n = prompt("Введите целое число строк");
     const s1 = "dog dog dog cat cat dog";
     const s2 = "dog dog cat cat dog dog";
     const s3 = "dog cat cat dog dog dog";
     var str = [s1, s2, s3];
     for (let i = 0; i < n; i++) {
         console.log(str[i%3]);
         }
 
   
}


