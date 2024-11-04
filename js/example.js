// Ushbu ifodani hisoblovchi getSum(n) nomli funksiya tuzing.
// 1 * 3 * … * (2 * n - 1) + 2 * 4 * … * (2 * n);

// Input: let n = 3;
// getSum(n); 1 * 3 * 5 + 2 * 4 * 6 = 15 + 48 = 63
// Output:  63

// Elementlari musbat butun sonlardan iborat bo'lgan arr nomli massiv berilgan. Eng ko'p xonali sonni chiqaruvchi getHighestNumberOfDigits(arr) nomli funksiya hosil qiling.

// Input: let arr = [1589, 31851, 512, 180975, 78];
// getDigitsNumber(arr);
// Output: 180975

// arr nomli massiv turli xil elementlardan tashkil topgan. Elementlari ichidan turi faqat string bo'lgan elementlarni massiv qilib qaytaradigan getStringArr(arr) nomli funksiya yozing.

// 	Input: let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]
// 	getStringArr(arr)
// 	Output: ["Abdulaziz", "Elbek", "Jurabek"]

// Quyidagi str nomli satrdagi tinish belgilari sonini topuvchi getPunctuationNumber(str) dastur tuzing.

// Input: let str = "Hello! How are you? I'm doing great. What's new?"
// const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
// getPunctuationNumber(str)
// Output: 6

// str nomli satrdagi katta harflarni kichigiga kichiklarini kattasiga almashtiruvchi switchLetters(str) nomli funksiya tuzing.

// Input: "Abdulaziz Programmer"
// switchLetters(str)
// Output: "aBDULAZIZ pROGRAMMER"

// Berilgan obj nomli obyektning kalitlari va qiymatlari yig'indisidan iborat massiv qaytaruvchi changeObjToArr(obj) nomli funksiya tuzing.

// Input: {a: 1, b: 2, c: 3}
// changeObjToArr(obj)
// Output: ["a1", "b2", "c3"]

// Ushbu students objektidagi studentlarni grant va contract bo'yicha guruhlarga ajratuvchi seperateStudents(students) nomli funksiya tuzing.

// 	Input: let students = [
// 	{name: "Jurabek", isGrant: false},
// 	{name: "Elbek", isGrant: true},
// 	{name: "Shamshod", isGrant: false},
// 	{name: "Kamola", isGrant: false},
// 	{name: "Gulnoza", isGrant: true},
// 	{name: "Savlatbek", isGrant: false},
// ]
// seperateStudents(students)
// 	Output: {
// grant: ['Elbek', 'Gulnoza'],
// contract: ['Jurabek', 'Shamshod', 'Kamola', 'Savlatbek']
// }

// Abdulaziz Programmerning o'qib tugatgan kitoblari jami necha sahifa ekanini qaytaruvchi getTotalPages(books) nomli funksiya tuzing.

// Input: const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];
// getTotalPages(books)
// Output: 2439

// Object konstuktorining prototypega obj nomli obyektning kalitlarini massiv sifatida qaytaruvchi keys nomli metod qo'shing.

// Input: let obj = {a: 1, b: 2, c: 3}
// obj.keys()
// Output: ["a", "b", "c"]

// Student nomli konstruktor yarating.
// Properties → firstName, lastName, university, course, totalYears, isGrant
// Prototype → getInfo()

// Input: let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// student.getInfo()
// Output: "Abdulaziz Programmer TATU universitetida 3-kursda grant asosida o'qiydi. 1 yildan keyin universitetidan qutuladi."
