"use strict";
function books(){
    console.clear()
    let book1 = {};
    book1.title = "The Bazaar of Bad Dreams";
    book1.pubYear = 2016;
    book1.price = 15.99;
    
    let book2 = {
      title: "Pet Sematary",
      pubYear: 1983,
      price: 20.99
    };
    
    let book3={}
    
    for (let prop in book1) {
      console.log(`${prop}: ${book1[prop]}`);
    }
    
    for (let prop in book2) {
      console.log(`${prop}: ${book2[prop]}`);
    }
    
    book1.show = function() {
      console.log(`Title: ${this.title}, Price: ${this.price}`);
    }
    
    book2.show = function() {
      console.log(`Title: ${this.title}, Price: ${this.price}`);
    }
    
    book1.show();
    book2.show();
    
    function isEmpty(obj) {
      for (let prop in obj) {
        return false;
      }
      return true;
    }
    
    console.log(isEmpty(book1));
    console.log(isEmpty(book2));
    console.log(isEmpty(book3));
        }
function adClas(){
    console.clear()
            let obj = {
            className: 'open menu',
        
            addClass(cls) {
              let classes = this.className.split(' ');
              if (!classes.includes(cls)) {
                classes.push(cls);
                this.className = classes.join(' ');
              }
              return this;
            },
          
            removeClass(cls) {
              let classes = this.className.split(' ');
              let index = classes.indexOf(cls);
              if (index !== -1) {
                classes.splice(index, 1);
                this.className = classes.join(' ');
              }
              return this;
            }
        };
        console.log( obj.addClass('new')); 
        console.log(obj.removeClass('open')); 
        console.log(obj.removeClass('menu'));
    }
function people(){
    console.clear()
    let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [ vasya , masha , vova ];
people.sort((a, b) => a.age - b.age);
console.log(people);
}
function datas(){
    console.clear()
    function getSecondsToday() {// функция для получения количества секунд с начала текущего дня
        let now = new Date(); // получаем текущую дату и время
        let start = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // создаем новую дату, устанавливая время в начало текущего дня
        let diff = now - start; // разница между текущей датой и началом дня в миллисекундах
        let seconds = Math.floor(diff / 1000); // переводим разницу в секунды и округляем до целого числа
        return seconds;
      }
      function formatDate(date) { // функция для форматирования даты
        let day = date.getDate();
        if (day < 10) day = '0' + day; // добавляем ведущий ноль, если число меньше 10
        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month; // добавляем ведущий ноль, если число меньше 10
        let year = date.getFullYear() % 100; // получаем две последние цифры года
        if (year < 10) year = '0' + year; // добавляем ведущий ноль, если число меньше 10
        return day + '.' + month + '.' + year;
      } 
      console.log(getSecondsToday());
      console.log(formatDate(new Date()));
}
