'use strict';

export function fib(n) {
    let a = BigInt(1); // первое число Фиббоначи
    let b = BigInt(1); // второе число Фиббоначи
    if (n == BigInt(0))
    {
        return BigInt(0); //возвращаем нуль при n=0
    }
    else
    {
        //алгоритм нахождения чисел Фиббоначи 
        for (let i = BigInt(3); i <= n; i++) 
        {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}