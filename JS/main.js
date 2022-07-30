// 1. У вас есть переменная a = ’34’. 
//    Написать все варианты перевода типа данных на число.

// let a = '34';
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(a * 1);


// 2. У вас есть переменная b = 29.92. 
//    Написать все варинты округления и задать комментарий с описанием работы данного варианта.

// let b = 29.92;
// console.log(Math.floor(b)); // округление в меньшую сторону
// console.log(Math.ceil(b)); // округление в большую сторону
// console.log(Math.round(b)); // округление к ближайшему
// console.log(Maht.trunc(b));  // обрезает после запятой 
// console.log(b.toFixed(1));  // округление до n

// 3. Получить рандомное число от 1 - 10 , 30 - 90, 200 -500.

// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 60) + 30);
// console.log(Math.ceil(Math.random() * 300) + 200);



// 4. У вас есть переменная c = ‘aBRAcADBRA’.  
//    Написать метод для изменения регистра строки.

//  let c = 'aBRAcADBRA';
//  console.log(c.toLocaleLowerCase());
//  console.log(c.toUpperCase());

// 5. У вас есть переменная d = ‘Hello world’.
//    В консоль вывести первый, второй , предпоследний и последний символ.

// let d = 'Hello world';
// console.log(d[0]);
// console.log(d[1]);
// console.log(d[9]);
// console.log(d[10]);


// 6. У вас есть переменная e = ‘Hello world’. 
//    В консоль вывести длину данной строки.

// let e = 'Hello world';
// console.log(e.length - 1);




// 7. У вас есть переменная f = ‘abracaDabra’.
//    Написать все варианты поиска подстроки и задать комментарий с описанием данного варианта.

// let f = 'abracaDabra';
// console.log(f.indexOf('ab'));  // по индексу
// console.log(f.includes('Da'));  // возвращает bool значение
// console.log(f.includes('Da', 7)); // начинает поиск с 6 индекса
// console.log(f.startsWith('abr')); // поиск с нач строки возвращает bool значение
// console.log(f.endsWith('ra'));  // поиск с конца строки возвращает bool значение
// console.log(f.slice(2, 7)); // возвращает отрезок
// console.log(f.substring(0, 4)); // возвращает start включая end
// console.log(f.substr(-1, 5));




// 8. У вас есть переменная g = ‘Propagination’.
//    Написать все варианты получения подстроки и задать комментарий с описанием данного варианта.

// let g = 'Propagination';

// console.log(g.indexOf('gin'));  // по индексу
// console.log(g.includes('nat'));  // возвращает bool значение
// console.log(g.includes('ti', 7)); // начинает поиск с 6 индекса
// console.log(g.startsWith('Pro')); // поиск с нач строки возвращает bool значение
// console.log(g.endsWith('io'));  // поиск с конца строки возвращает bool значение
// console.log(g.slice(2, 7)); // возвращает отрезок
// console.log(g.substring(0, 4)); // возвращает start включая end
// console.log(g.substr(-1, 5));  
