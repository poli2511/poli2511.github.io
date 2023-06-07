"use strict";

// возвращает n-е число Фибоначчи
import {fib}  from '../lab2/fib.js';

//возвращает дробную часть числа num
export function getDecimal(num) {
  let w = Math.abs(num - Math.floor(num));
  return parseFloat(w.toFixed(2));
}


//возвращает строку str с заглавным первым символом
export function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}


//возвращает true, если строка str содержит 'viagra' или 'XXX', иначе false
export function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


// проверяет длину строки str, если она превосходит maxlength заменяет конец строки на "…"
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}


//преобразует строку вида 'var-test-text' в 'varTestText'
export function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}





//для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
export function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }
  return arr;
}


//принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов
export function arrReverseSorted(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  
  return sortedArr;
}


//вернёт массив уникальных, не повторяющихся значений массива arr
export function unique(arr) {
  return Array.from(new Set(arr));
}
