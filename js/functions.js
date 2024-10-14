// QY - qiymat qaytaruvchi
// QYM - qiymat qaytarmaydigan

// ﻿DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//! Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

// function rectangle(a, b) {
//   console.log(a * b);
//   console.log(2 * (a + b));
// }

// rectangle(6, 9);
//! Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
function triangle(a) {
  console.log(0.5 * a * a);
  console.log(3 * a);
}

triangle(6);
// triangle (6)

//! Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY

// function sum(n) {
//   let res = 0;
//   for (let i = 0; i <= n; i++) {
//     res += i;
//   }
//   return res;
// }
// let result = sum(21);
// console.log(result);

//! Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// function isSquare(n) {
//   return Number.isInteger(Math.sqrt(n));
// }

// let res = isSquare(23);
// console.log(res);

//! Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4
// function digitCount(n) {
//   let count = 0;

//   while (n > 1) {
//     let digitCount = n % 10;
//     count++;
//     n = Math.floor(n / 10);
//   }

//   return count;
// }

// console.log(digitCount(21313));

//! Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

// function getDigitSum(n) {
//   let count = 0;

//   while (n > 1) {
//     let digitCount = n % 10;
//     count += digitCount;
//     n = Math.floor(n / 10);
//   }

//   return count;
// }

// console.log(getDigitSum(21313));
//! Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40

//

//! Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

// UYGA VAZIFA

//! Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(a = 3, n = 5) {
//   return a ** n;
// }

// console.log(power());

//! Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a * b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24
// function mean(a, b) {
//   console.log((a + b) / 2, (a * b) ** (1 / 2));
// }

// mean(12, 48);
//! Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// function sign(n) {
//   return n < 0 ? -1 : n == 0 ? 0 : 1;
// }

// console.log(sign(0));

//! Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// function numberOfRoots(a, b, c) {
//   return b ** 2 - 4 * a * c > 0
//     ? "Ikkita ildiz"
//     : b ** 2 - 4 * a * c == 0
//     ? "Bitta ildiz "
//     : "Ildiz yo'q";
// }

// console.log(numberOfRoots(1, -6, 9));

//! Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// function areaCircle(R) {
//   return 3.14 * R ** 2;
// }

// console.log(areaCircle(12));

//! Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(a, b) {
//   let sum = 0;

//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   } else {
//     return 0;
//   }

//   return sum;
// }

// console.log(sumRange(8, 10));

//! Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(a, b, s) {
//   switch (s) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "Error! Invalid operator";
//   }
// }

// console.log(calc(1, 2, "*"));

//! Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true
// function isEven(n) {
//   return n % 2 === 0;
// }

// console.log(isEven(10));

//! Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//   let min = Math.min(a, b, c);
//   let max = Math.max(a, b, c);

//   let middle = a + b + c - min - max;

//   return `${max}, ${middle}, ${min}`;
// }

// let res = sortABC(10, 23, 12);

// console.log(res);

//! Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY

function isPowerN(k, n) {
  return Math.pow(k, 1 / n).toFixed();
}

console.log(isPowerN(10, 3));

//! Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// function isPrime(n) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }

//   return count > 2 ;
// }

// console.log(isPrime(12));

//! Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4

// function isPrime(n) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }

//   return count > 2;
// }

// function numberOfPrime(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(numberOfPrime(10));
//! Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

function digitNth(number, n) {
  const strNumber = number.toString(); // Sonni stringga o'girish
  const length = strNumber.length; // Sonning raqamlar soni
  if (n > length) {
    return -1;
  }
  return +strNumber[length - n];
}

console.log(digitNth(105782, 5)); // 8
console.log(digitNth(1057, 5)); // -1

//! Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// function inverseNumber(N) {
//   let numInverse = 0;

//   while (N > 0) {
//     console.log(N);

//     numInverse = numInverse * 10 + (N % 10);
//     N = Math.floor(N / 10);
//   }

//   return numInverse;
// }
// let res = inverseNumber(123);

// console.log(res);

//! Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true
function isPalindrom(N) {
  let orginal = N;
  let reserev = 0;
  while (N > 0) {
    reserev = reserev * 10 + (N % 10);
    N = Math.floor(N / 10);
  }

  return reserev === orginal;
}

let res = isPalindrom(1678761);
console.log(res);

//! Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

//! Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

//! Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

//! Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400

//! Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

//! Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

//! Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

//! Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

//! Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

//! Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24
