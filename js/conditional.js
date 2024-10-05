// ﻿DARSDA ISHLANISHI KERAK BO’LGAN MASALALAR

//! if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = -12;

// if (num > 0) {
//   num++;
// } else {
//   num -= 2;
// }

// console.log(num);

//! if2. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.
// let a = 2,
//   b = -2,
//   c = 4;
// res = 0;

// if (a > 0) res++;
// if (b > 0) res++;
// if (c > 0) res++;

// console.log(res);

//! if3. Ikki son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.
// let a = 2;
// b = -2;

// if (a > b) {
//   console.log(b, a);
// } else {
//   console.log(a, b);
// }
//! if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = 2,
//   b = 2,
//   c = 7;

// if (a == b) {
//   console.log(c + " 3-raqam");
// } else if (b == c) {
//   console.log(a + " 1-raqam");
// } else if (a == c) {
//   console.log(b + " 2-raqam");
// } else {
//   console.log("Not faund");
// }
//! if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x < -2 yoki x > 2 bo’lsa 2 * x
// aks holda -3 * x;
// let x = 1;
// if (x < -2 || x > 2) {
//   console.log(2 * x);
// } else {
//   console.log(-3 * x);
// }

//! if6. Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.

// let num = -4;

// if (num > 0) {
//   if (num % 2 === 0) {
//     console.log("Musbat va Juft son");
//   } else {
//     console.log("Musbat va toq son");
//   }
// } else if (num < 0) {
//   if (num % 2 === 0) {
//     console.log("Manfiy juft son");
//   } else {
//     console.log("Manfiy toq son");
//   }
// } else {
//   console.log("Nol son");
// }

//? Case1. 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)
// switch (num) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//     "Bunday kun mavjud emas !";
//     break;
// }
//? Case2. A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.
// let a = 3,
//   b = 3,
//   operator = "+";

// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;

//   default:
//     "Hello world";
//     break;
// }
//? Case3. Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

// let ab = 70;

// let a = parseInt(ab / 10);
// let b = ab % 10;

// let res;

// switch (a) {
//   case 2:
//     res = "Yigirma";
//     break;
//   case 3:
//     res = "O'ttiz";
//     break;
//   case 4:
//     res = "Qirq";
//     break;
//   case 5:
//     res = "Ellik";
//     break;
//   case 6:
//     res = "Oltmish";
//     break;
//   default:
//     res = "...";
// }

// res += " ";

// switch (b) {
//   case 1:
//     res += "bir";
//     break;
//   case 2:
//     res += "ikki";
//     break;
//   case 3:
//     res += "uch";
//     break;
//   case 4:
//     res += "to'rt";
//     break;
//   case 5:
//     res += "besh";
//     break;
//   case 6:
//     res += "olti";
//     break;
//   case 7:
//     res += "jetti";
//     break;
//   case 8:
//     res += "sakkiz";
//     break;
//   case 9:
//     res += "to'qqiz";
//     break;
// }

// console.log(res);

// UYGA VAZIFA

//! if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = -132;

// if (num > 0) {
//   num++;
// }

// console.log(num);

//! if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let num = 12;

if (num > 0) {
  num++;
} else if (num < 0) {
  num -= 2;
} else {
  num = 10;
}
//! if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.
// let a = 1;
let res = 0;
(b = 3), (c = 2);

if (a > 0) res++;
if (b > 0) res++;
if (c > 0) res++;

//! if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
//! if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
if (a > b) {
  console.log(b + " Ikkinchi raqam");
} else {
  console.log(a + " Ikkinchi raqam");
}
//! if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.
if (a > b) {
  console.log(a, b);
} else {
  console.log(b, a);
}
//! if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

// let A = 3;
// let B = 11;
// if (A > B) {
//   B = A;
//   console.log(B);
// } else {
//   console.log(B);
// }
//! if8. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
if (A !== B) {
  console.log(A + B, A + " " + B);
} else {
  console.log(0);
}
//! if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
if (A !== B) {
  if (A > B) {
    console.log(A);
  } else {
    console.log(B);
  }
} else {
  console.log(0);
}
//! if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
if (a < b && a < c) {
  console.log(a);
} else if (b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}
//! if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.

// let a = 101,
//   b = 13,
//   c = 37;
if ((a > b && a < c) || (a < b && a > c)) {
  console.log(a);
} else if ((b > a && b < c) || (b > c && b < a)) {
  console.log(b);
} else {
  console.log(c);
}
//! if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.
let a = 3,
  b = 5,
  c = 7; // Misol uchun sonlar

if (a + b >= a + c && a + b >= b + c) {
  console.log(a, b);
} else if (a + c >= a + b && a + c >= b + c) {
  console.log(a, c);
} else {
  console.log(b, c);
}

//! if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
if (A > B && B > C) {
  console.log(2 * A, 2 * B, 2 * C);
} else {
  console.log(-1 * A, -1 * B, -1 * C);
}
//! if14. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
if ((A > B && B > C) || (A < B && B < C)) {
  console.log(2 * A, 2 * B, 2 * C);
} else {
  console.log(-1 * A, -1 * B, -1 * C);
}
//! if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
if (A == B && B == C && C !== D) {
  console.log(D + "4- raqam");
} else if (A == B && B == D && D !== C) {
  console.log(C + "3- raqam");
} else if (A == D && D == C && C !== B) {
  console.log(B + "2- raqam");
} else if (D == B && B == C && C !== A) {
  console.log(A + "1- raqam");
} else {
  console.log("Hech bir raqam teng emas !");
}
//! if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4
if (x <= 0) {
  console.log(-x);
} else if (x > 0 && x < 2) {
  console.log(x * x);
} else {
  console.log(4);
}

//! if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

// let year = 2024;

// if (year % 4 == 0 || year % 100 != 0 || year % 400 == 0) {
//   console.log(`${year} - kabisa yil.`);
// } else {
//   console.log(`${year} - kabisa bolmagan yil.`);
// }

//! if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

// let num = 76;

// if (num < 10) {
//   if (num % 2 == 0) {
//     console.log("Bir xonali juft raqam !");
//   } else {
//     console.log("Bir xonali toq raqam !");
//   }
// } else if (num > 9 && num <= 99) {
//   if (num % 2 == 0) {
//     console.log("Ikki xonali juft raqam !");
//   } else {
//     console.log("Ikki xonali toq raqam !");
//   }
// } else if (num > 99) {
//   if (num % 2 == 0) {
//     console.log("Uch xonali juft raqam !");
//   } else {
//     console.log("Uch xonali toq raqam !");
//   }
// }

//

//? Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

//? Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

//? Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

//? Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

//? Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

//? Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

//? Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

//? Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

//? Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib beruvchi programma tuzilsin.

//? Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)

//? Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").

//? Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".

// Qudrat Abdurahimov ustozimizning C++ dastur nomli kitoblaridan saralab olingan masalalar !

// let k = 3; // Masalan, 3 berilgan

// switch (k) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Xato");
// }

// let month = 2; // Masalan, 2 chi oy

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Xato oy raqami");
// }

// let month = 2; // Masalan, fevral

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 kun");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun");
//     break;
//   case 2:
//     console.log("28 kun");
//     break;
//   default:
//     console.log("Xato oy raqami");
// }

// let unit = 3; // Uzunlik birligi (masalan, metr)
// let length = 5; // Masalan, 5 metr

// switch (unit) {
//   case 1: // desimetr
//     console.log(`${length / 10} metr`);
//     break;
//   case 2: // kilometr
//     console.log(`${length * 1000} metr`);
//     break;
//   case 3: // metr
//     console.log(`${length} metr`);
//     break;
//   case 4: // millimetr
//     console.log(`${length / 1000} metr`);
//     break;
//   case 5: // santimetr
//     console.log(`${length / 100} metr`);
//     break;
//   default:
//     console.log("Xato birlik");
// }

// let unit = 1; // Og'irlik birligi (masalan, kilogramm)
// let weight = 5; // Masalan, 5 kilogramm

// switch (unit) {
//   case 1: // kilogramm
//     console.log(`${weight} kilogramm`);
//     break;
//   case 2: // milligramm
//     console.log(`${weight / 1e6} kilogramm`);
//     break;
//   case 3: // gramm
//     console.log(`${weight / 1000} kilogramm`);
//     break;
//   case 4: // tonna
//     console.log(`${weight * 1000} kilogramm`);
//     break;
//   case 5: // sentner
//     console.log(`${weight * 100} kilogramm`);
//     break;
//   default:
//     console.log("Xato birlik");
// }

// let day = 31;
// let month = 12;

// console.log(`Sana: ${day}-${month}`);

// let day = 31;
// let month = 12;

// switch (month) {
//   case 12:
//     if (day === 31) {
//       day = 1;
//       month = 1;
//     } else {
//       day++;
//     }
//     break;
//   case 1:
//     if (day === 31) {
//       day = 1;
//       month++;
//     } else {
//       day++;
//     }
//     break;
//   case 2:
//     if (day === 28) {
//       day = 1;
//       month++;
//     } else {
//       day++;
//     }
//     break;
//   case 3:
//     if (day === 31) {
//       day = 1;
//       month++;
//     } else {
//       day++;
//     }
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     if (day === 30) {
//       day = 1;
//       month++;
//     } else {
//       day++;
//     }
//     break;
//   default:
//     console.log("Xato oy raqami");
// }

// console.log(`Keyingi sana: ${day}-${month}`);

// let direction = "s"; // Shimol
// let command = 1; // Masalan, chapga buril

// switch (direction) {
//   case "s":
//     switch (command) {
//       case 0:
//         break; // Harakatni davom ettirish
//       case 1:
//         direction = "g"; // chapga
//         break;
//       case 2:
//         direction = "q"; // o'ngga
//         break;
//     }
//     break;
//   case "j":
//     switch (command) {
//       case 0:
//         break; // Harakatni davom ettirish
//       case 1:
//         direction = "q"; // chapga
//         break;
//       case 2:
//         direction = "g"; // o'ngga
//         break;
//     }
//     break;
//   case "q":
//     switch (command) {
//       case 0:
//         break; // Harakatni davom ettirish
//       case 1:
//         direction = "s"; // chapga
//         break;
//       case 2:
//         direction = "j"; // o'ngga
//         break;
//     }
//     break;
//   case "g":
//     switch (command) {
//       case 0:
//         break; // Harakatni davom ettirish
//       case 1:
//         direction = "j"; // chapga
//         break;
//       case 2:
//         direction = "s"; // o'ngga
//         break;
//     }
//     break;
// }

// console.log(`Robot yo'nalishi: ${direction}`);

// let n = 11; // Masalan, valet
// let m = 2; // Masalan, olma

// let qiymatlar;
// switch (n) {
//   case 11:
//     qiymatlar = "valet";
//     break;
//   case 12:
//     qiymatlar = "dama";
//     break;
//   case 13:
//     qiymatlar = "qirol";
//     break;
//   case 14:
//     qiymatlar = "tuz";
//     break;
//   default:
//     qiymatlar = n;
// }

// let turlar;
// switch (m) {
//   case 1:
//     turlar = "g'isht";
//     break;
//   case 2:
//     turlar = "olma";
//     break;
//   case 3:
//     turlar = "chillak";
//     break;
//   case 4:
//     turlar = "qarg'a";
//     break;
//   default:
//     turlar = "xato";
// }

// console.log(`${qiymatlar} ${turlar}`);

// let son = 22; // Masalan, 22
// let onlik = "";
// let birlik = "";

// switch (Math.floor(son / 10)) {
//   case 1:
//     onlik = "o'n";
//     break;
//   case 2:
//     onlik = "yigirma";
//     break;
//   case 3:
//     onlik = "o'ttiz";
//     break;
//   case 4:
//     onlik = "qirq";
//     break;
//   case 5:
//     onlik = "ellik";
//     break;
// }

// switch (son % 10) {
//   case 1:
//     birlik = "bir";
//     break;
//   case 2:
//     birlik = "ikki";
//     break;
//   case 3:
//     birlik = "uch";
//     break;
//   case 4:
//     birlik = "to'rt";
//     break;
//   case 5:
//     birlik = "besh";
//     break;
//   case 6:
//     birlik = "olti";
//     break;
//   case 7:
//     birlik = "yetti";
//     break;
//   case 8:
//     birlik = "sakkiz";
//     break;
//   case 9:
//     birlik = "to'qqiz";
//     break;
// }

// let result = `${onlik} ${birlik}ta masala`.trim();
// console.log(result);

// let num = 123; // Masalan, 123
// let yuzlik = "";
// let onlik = "";
// let birlik = "";

// switch (Math.floor(num / 100)) {
//   case 1:
//     yuzlik = "bir yuz";
//     break;
//   case 2:
//     yuzlik = "ikki yuz";
//     break;
//   case 3:
//     yuzlik = "uch yuz";
//     break;
//   case 4:
//     yuzlik = "to'rt yuz";
//     break;
//   case 5:
//     yuzlik = "besh yuz";
//     break;
//   case 6:
//     yuzlik = "olti yuz";
//     break;
//   case 7:
//     yuzlik = "yetti yuz";
//     break;
//   case 8:
//     yuzlik = "sakkiz yuz";
//     break;
//   case 9:
//     yuzlik = "to'qqiz yuz";
//     break;
// }

// switch (Math.floor((num % 100) / 10)) {
//   case 1:
//     onlik = "o'n";
//     break;
//   case 2:
//     onlik = "yigirma";
//     break;
//   case 3:
//     onlik = "o'ttiz";
//     break;
//   case 4:
//     onlik = "qirq";
//     break;
//   case 5:
//     onlik = "ellik";
//     break;
//   case 6:
//     onlik = "oltmish";
//     break;
//   case 7:
//     onlik = "yetmish";
//     break;
//   case 8:
//     onlik = "sakson";
//     break;
//   case 9:
//     onlik = "to'qson";
//     break;
// }

// switch (num % 10) {
//   case 1:
//     birlik = "bir";
//     break;
//   case 2:
//     birlik = "ikki";
//     break;
//   case 3:
//     birlik = "uch";
//     break;
//   case 4:
//     birlik = "to'rt";
//     break;
//   case 5:
//     birlik = "besh";
//     break;
//   case 6:
//     birlik = "olti";
//     break;
//   case 7:
//     birlik = "yetti";
//     break;
//   case 8:
//     birlik = "sakkiz";
//     break;
//   case 9:
//     birlik = "to'qqiz";
//     break;
// }

// let result = `${yuzlik} ${onlik} ${birlik}`.trim();
// console.log(result);

// let year = 1984; // Masalan, 1984 yili
// let color = "";
// let animal = "";

// switch ((year - 1984) % 5) {
//   case 0:
//     color = "yashil";
//     break;
//   case 1:
//     color = "qizil";
//     break;
//   case 2:
//     color = "sariq";
//     break;
//   case 3:
//     color = "oq";
//     break;
//   case 4:
//     color = "qora";
//     break;
// }

// switch ((year - 1984) % 12) {
//   case 0:
//     animal = "sichqon";
//     break;
//   case 1:
//     animal = "sigir";
//     break;
//   case 2:
//     animal = "yo'lbars";
//     break;
//   case 3:
//     animal = "quyon";
//     break;
//   case 4:
//     animal = "ajdar";
//     break;
//   case 5:
//     animal = "ilon";
//     break;
//   case 6:
//     animal = "ot";
//     break;
//   case 7:
//     animal = "qo'y";
//     break;
//   case 8:
//     animal = "maymun";
//     break;
//   case 9:
//     animal = "tovuq";
//     break;
//   case 10:
//     animal = "it";
//     break;
//   case 11:
//     animal = "to'ng'iz";
//     break;
// }

// console.log(`${color} ${animal} yili`);
