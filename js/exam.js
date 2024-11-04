// Sonning toq bo’luvchilari yig’indisini qaytaruvchi getOddDividersSum(n) nomli funksiya tuzing.

// Input:
// let n = 30;
// getOddDividersSum(n);
// 1, 3, 5, 15

// Output:
// 24

// function getDividersSum(n) {
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     if (n % i == 0 && i % 2 != 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// let res = getDividersSum(30);

// console.log(res);

// Elementlari satrlardan iborat bo'lgan arr nomli massiv berilgan. Berilgan str nomli satrni o’z ichiga olgan ismlarni qidirib massiv qaytaruvchi search(arr) nomli funksiya hosil qiling.

// Input:

// let str = "az";
// search(arr, str);

// Output:
// ["Abdulaziz", "Azamat"]

// let arr = [
//   "Abdulaziz",
//   "Shahobiddin",
//   "Shohrux",
//   "Shukurjon",
//   "Azamat",
//   "Rahmatulla",
// ];
// function search(arr, str) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(str)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let res = search(arr, "az");
// console.log(res);

// arr nomli massiv sonlardan tashkil topgan. Elementlari ichidan faqat n ga bo'linadigan elementlarini yig’insini qaytaradigan getDividersSum(arr, n) nomli funksiya yozing.

// Input:
// let arr = [2, 5, 7, 10, 0, 18, 15]
// let n = 5;
// getDividers(arr, n);
// 5, 10, 0, 15

// Output:
// 30

// let arr = [2, 5, 7, 10, 0, 18, 15];

// function getDividersSum(arr, n) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// let res = getDividersSum(arr, 5);

// console.log(res);

// str nomli satrdagi darak gap ekanlikka tekshiruvchi checkSentence(str) nomli funksiya yozing. Bunda satrning 1-harfi katta va oxirgisi nuqta bilan tugagan bo’lishi kerak.

// Input:
// let str = "Abdulaziz programmer is full-stack developer."
// checkSentence(str)

// Output:
// true

// function checkSentence(str) {
//   return (
//     str.charAt(0).toUpperCase() === str.charAt(0) &&
//     str.charAt(str.length - 1) === "."
//   );
// }

// let str = "Abdulaziz programmer is full-stack developer.";
// let res = checkSentence(str);
// console.log(res);

// str nomli satr berilgan. Undagi katta va kichik harflar sonini object ko'rinishida qaytaruvchi getNumberOfCases(str) nomli funksiya yozing.

// Input:
// let str = "Abdulaziz Programmer"
// getNumberOfCases(str)

// Output:
// {
//     upperCases: 2,
//     lowerCases: 17
// }

// function getNumberOfCases(str) {
//   let upperCases = 0;
//   let lowerCases = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//       upperCases++;
//     } else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
//       lowerCases++;
//     }
//   }

//   return { upperCases, lowerCases };
// }
// let str = "Abdulaziz Programmer";
// let res = getNumberOfCases(str);

// console.log(res);

// Berilgan obj nomli obyektning avval kalitlari, keyin esa qiymatlari yig'indisidan iborat massiv qaytaruvchi changeObjToString(obj) nomli funksiya tuzing.

// Input:
// let obj = {a: 1, b: 2, c: 3}
// changeObjToString(obj)

// Output: abc123

// function changeObjToString(obj) {
//   let result = "";
//   for (let key in obj) {
//     result += key + obj[key];
//   }
//   return result;
// }

// let obj = { a: 1, b: 2, c: 3 };
// let res = changeObjToString(obj);
// console.log(res);

// Mahsulotlar objectidan tuzilgan products nomli massiv berilgan. Berilgan id li elementlarni narxlari yig’indisini qaytaruvchi getProductsSum(id1, id2, …) nomli funksiya yozing.

// // Input:
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];
// // getProductsSum(4, 6, 9)
// // 600, 1000, 700

// // Output:
// // 2300

// function getProductsSum(id1, id2, id3, id4) {
//   let sum = 0;
//   for (let i = 0; i < products.length; i++) {
//     if (
//       products[i].id === id1 ||
//       products[i].id === id2 ||
//       products[i].id === id3 ||
//       products[i].id === id4
//     ) {
//       sum += products[i].price;
//     }
//   }
//   return sum;
// }

// let res = getProductsSum(4, 6, 9);

// console.log(res);

// Mahsulotlar objectidan tuzilgan products nomli massiv berilgan. Ushbu massivdan eng yuqori narxga ega n ta mahsulotlarni nomlarini massiv ko’rinishida qaytaruvchi getTopProducts(products, n) nomli funksiya tuzing.

// Input:
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];
// let n = 3;
// getTopProducts(products, n)

// Output:
// ["Computer", "Album", "Bottle"]

// function getTopProducts(products, n) {
//   let topProducts = products.slice().sort((a, b) => b.price - a.price);
//   return topProducts.slice(0, n).map((product) => product.name);
// }

// let res = getTopProducts(products, 3);
// console.log(res);

// Berilgan str satrda nechta char nomli belgi borligini aniqlovchi String constructorining prototypeiga count() nomli funksiya yozing.

// Input:
// let str = "Abdulaziz Programmer"
// let char = "a"
// str.count(char)

// Output: 2

// String.prototype.count = function (char) {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i].toLowerCase() === char.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// };

// let str = "Abdulaziz Programmer";
// let char = "a";
// console.log(str.count(char)); // 2

// Product nomli konstruktor yarating.
// Properties → name, company, price, discount
// Prototype → getInfo()

// Input:
// let p1 = new Product("Iphone 15", "Apple", 1500, 20);
// let p2 = new Product("S22", "Samsung", 1200);
// p1.getInfo();
// p2.getInfo();

// Output:
// "Apple kompaniyasi tomonidan ishlab chiqarilgan Iphone 15 ning asl narxi 1500$. Aksiyadagi narxi esa 1200$."
// "Samsung kompaniyasi tomonidan ishlab chiqarilgan Samsung ning asl narxi 1200$. Aksiya mavjud emas!"
// class Product {
//   constructor(name, company, price, discount = 0) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.discount = discount;
//   }

//   getInfo() {
//     if (this.discount > 0) {
//       const discountedPrice = this.price - (this.price * this.discount) / 100;
//       return `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiyadagi narxi esa ${discountedPrice}$.`;
//     } else {
//       return `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiya mavjud emas!`;
//     }
//   }
// }

// let p1 = new Product("Iphone 15", "Apple", 1500, 20);
// let p2 = new Product("S22", "Samsung", 1200);

// console.log(p1.getInfo());
// Output: "Apple kompaniyasi tomonidan ishlab chiqarilgan Iphone 15 ning asl narxi 1500$. Aksiyadagi narxi esa 1200$."

// console.log(p2.getInfo());
// Output: "Samsung kompaniyasi tomonidan ishlab chiqarilgan S22 ning asl narxi 1200$. Aksiya mavjud emas!"
