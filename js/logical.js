// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR
//
//! Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
//! Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
//! Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
//! Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
//! Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
//! Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
//! Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
//! Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
//! Boolean9. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi".

// UYGA VAZIFA

//! Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
console.log(A % 2 == 0);

//! Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"

console.log(A >= 0 || B < -2);

//! Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
console.log((A > B && B > C) || (A < B && B < C));

//! Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

console.log(A % 2 !== 0 && B % 2 !== 0);

//! Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
console.log(A % 2 !== 0 || B % 2 !== 0);
//! Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
console.log((A % 2 !== 0 && B % 2 == 0) || (A % 2 == 0 && B % 2 !== 0));
//! Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
console.log(A > 0 && B > 0 && C > 0);

//! Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
console.log(
  (A > 0 && B < 0 && C < 0) ||
    (A < 0 && B > 0 && C > 0) ||
    (A < 0 && B < 0 && C > 0)
);

//! Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

console.log(
  (A > 0 && B > 0 && C < 0) ||
    (A > 0 && B < 0 && C > 0) ||
    (A < 0 && B > 0 && C > 0)
);
//! Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".

console.log(A % 2 == 0 && A > 9);
//! Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
console.log(A > 99 && A % 2 !== 0);

//! Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".

console.log(A == -B || B == -C || A == -C);

//! Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let abc = 764;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;

// console.log(a > b && b > c);

//! Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let abc = 764;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;

// console.log((a > b && b > c)(a < b && b < c));
//! Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let abc = 764;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;

// console.log(a == c);

// ﻿SHAXMATGA OID MASALALAR (IXTIYORIY)

//! Boolean16. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Berilgan maydonlar bir xil rangda".
// let x1 = 1,
//   y1 = 1,
//   x2 = 2,
//   y2 = 2;
// console.log((x1 + y1) % 2 === (x2 + y2) % 2); // true

// (x1 = 1), (y1 = 1), (x2 = 3), (y2 = 2);
// console.log((x1 + y1) % 2 === (x2 + y2) % 2); // false

//! Boolean17. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Ruh bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 1,
//   y1 = 1,
//   x2 = 1,
//   y2 = 8;
// console.log(x1 === x2 || y1 === y2); // true

// (x1 = 1), (y1 = 1), (x2 = 2), (y2 = 8);
// console.log(x1 === x2 || y1 === y2); // false

//! Boolean18. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Shoh bir yurishda bir maydondan ikkinchisiga o'ta oladi."
// let x1 = 4,
//   y1 = 4,
//   x2 = 5,
//   y2 = 5;
// console.log(Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1); // true

// (x1 = 4), (y1 = 4), (x2 = 6), (y2 = 6);
// console.log(Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1); // false

//! Boolean19. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Fil bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 2,
//   y1 = 2,
//   x2 = 5,
//   y2 = 5;
// console.log(Math.abs(x1 - x2) === Math.abs(y1 - y2)); // true

// (x1 = 2), (y1 = 2), (x2 = 5), (y2 = 6);
// console.log(Math.abs(x1 - x2) === Math.abs(y1 - y2)); // false

//! Boolean20. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Ot bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 3, y1 = 3, x2 = 5, y2 = 4;
// console.log((Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1) ||
//             (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2));  // true

// x1 = 3, y1 = 3, x2 = 6, y2 = 4;
// console.log((Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1) ||
//             (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2));  // false
