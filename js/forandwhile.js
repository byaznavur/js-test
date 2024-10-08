// ﻿DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//! For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
// let n = 3;
// let k = 4;
//! for (let i = 0; i < n; i++) {
//   console.log(k);
// }
//! For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let sum = 10000;
// let n = 1;

//! for (let i = 0; i < n; i += 0.1) {
//   console.log((sum * i).toFixed());
// }
//! For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2
// let res = 0;
// let n = 5;
//! for (let i = 0; i <= n; i++) {
//   res += i ** 2;
// }
// console.log(res);

//! For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

// let n = 5;

// let res = 0;

//! for (let i = 0; i <= n; i++) {
//   res += i ** (n - i + 1);

//   console.log(n - i + 1);
// }

// console.log(res);

//! For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let A = 5;
// let B = 10;

//! for (let i = A; i <= B; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(i);
//   }
// }

//! For6. Sonning bo’luvchilarini topish;
// let n = 12;
//! for (let i = 0; i < n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
//
// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.
// let N = 1213;
// let K = 6;
// let res = 0;
// while (N >= K) {
//   N -= K;
//   res++;
// }

// console.log(res + " Qiymat", N + " Qoldiq");

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// let num = 64;
// let count = 0;
// while (num != 1) {
//   num /= 2;
//   count++;
// }

// console.log(count);

//! UYGA VAZIFA

//! For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

// let a = 3,
//   b = 10,
//   count = 0;

// for (let i = a; i <= b; i++) {
//   console.log(i);

//   count++;
// }

// console.log(count);

//! For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
// let a = 3,
//   b = 10,
//   count = 0;

// for (let i = b; i >= a; i--) {
//   console.log(i);

//   count++;
// }

// console.log(count);
//! For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
// for (let i = 0; i < 10; i++) {
//   console.log(i * 12000);
// }
//! For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// for (let i = 0; i < 2; i += 0.2) {
//   console.log(i * 10000);
// }

//! For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// let a = 3,
//   b = 10;

// let count = 0;

// for (let i = a; i < b; i++) {
//   count += i;
// }

// console.log(count);

//! For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let a = 3,
//   b = 10;

// let count = 1;

// for (let i = a; i < b; i++) {
//   count *= i;
// }

// console.log(count);

//! For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let a = 3,
//   b = 10;

// let count = 0;

// for (let i = a; i < b; i++) {
//   count += i ** 2;
// }

// console.log(count);
//! For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n

// let a = 3,
//   b = 10;

// let count = 0;

// for (let i = a; i < b; i++) {
//   count += 1 / i;
// }

// console.log(count);

//! For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

// let a = 1,
//   b = 2;

// let count = 1;

// for (let i = a; i < b; i += 0.1) {
//   count *= i;
//   console.log(i);
// }

// console.log(count);
//! For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.

// let n = 10;
// for (let i = 0; i <= n; i++) {
//   console.log(i + " ning kvadratini" + ":" + i ** 2);
// }

//! For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;
// let a = 3;
// let n = 12;

// for (let i = 0; i <= n; i++) {
//   console.log(i + " ning darajasi" + " : " + n ** i);
// }
//! For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
// a^n=a*a*a...a;
// let a = 3;
// let n = 12;

// for (let i = 0; i <= n; i++) {
//   console.log(i + " ning darajasi" + " : " + n ** i);
// }

//! For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n
// a^n=a*a*a...a;
// let a = 3;
// let n = 12;

// for (let i = 0; i <= n; i++) {
//   console.log(i + " ning darajasi" + " : " + n ** i);
// }

//! For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// let n = 10;

// for (let i = 0; i <= n; i++) {
//   let res = 1;
//   for (let j = 1; j < i; j++) {
//     res *= j;
//   }
//   console.log(res);
// }

//! For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K
// let k = 2;
// let n = 5;
// let res = 0;
// for (let i = 0; i <= n; i++) {
//   res += i ** 2;
// }

// console.log(res);

//! For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N
// let n = 5;
// let res = 0;
// for (let i = 0; i <= n; i++) {
//   res += i ** i;
// }

// console.log(res);

//! For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.
// let A = 5;
// let B = 10;

// for (let i = A; i <= B; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(i);
//   }
// }

//! For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
// let n = 10;
// let sum = 0;
// let count = 0;
// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     count++;
//     sum += i;
//   }
// }

// console.log(sum);
// console.log(count);

//! For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let n = 10;
// let sum = 0;
// let count = 0;
// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     count++;
//     sum += i;
//   }
// }

// if (count > 2) {
//   console.log("Murakkab son !");
// } else {
//   console.log("Tub son !");
// }

// console.log(sum);
// console.log(count);
//! For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// let n = 5;

// for (let i = 0; i <= n; i++) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += j + " ";
//   }

//   console.log(str);
// }
// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.

// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754

// While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
