// ================================
//        OSON MASALALAR (7 ta)
// ================================

// 1-masala
// Berilgan arrayga bitta qiymat qoâ€˜shing.
// Foydalanish: push()

  // Qani yozingchi bu qiymatni oxiriga ðŸ‘€
  function addToEnd(arr, value) {
   arr.push(value);
   return arr;
  }

  let mevalar = ["olma", "banan", "apelsin"];

  addToEnd(mevalar, "kiwi");
  console.log(mevalar);


// 2-masala
// Arrayning oxirgi elementini olib tashlang.
// Foydalanish: pop()
function removeLast(arr) {
  // Kim oxirgi? Yozmayman, siz toping ðŸ˜‰
  arr.pop();
  return arr;
}

let mevalar2 = ["olma", "banan", "apelsin", "kiwi"];

removeLast(mevalar2);
console.log(mevalar2);


// 3-masala
// Array boshiga yangi element qoâ€˜shing.
// Foydalanish: unshift()
function addToStart(arr, value) {
  // Boshidan boshlab yuramiz, yozingchi ðŸ‘€
  arr.unshift(value);
  return arr;
}

let sonlar = [1, 2, 3, 4, 5];
console.log(addToStart(sonlar, 0));


// 4-masala
// Arrayning birinchi elementini olib tashlang.
// Foydalanish: shift()
function removeFirst(arr) {
  // Peshqadamni haydamoqchimisiz? Kod bilan bajaring ðŸ’¨
  arr.shift();
  return arr;
}

let sonlar2 = [1, 2, 3, 4, 5];

console.log(removeFirst(sonlar2));


// 5-masala
// Stringdagi boâ€˜sh joylarni olib tashlang.
// Foydalanish: trim()
function cleanString(str) {
  // Tarash-tarash, tozalab tashlang âœ‚ï¸
   return str.trim();
}

let text = "   salom    ";
console.log(cleanString(text));


// 6-masala
// Berilgan string katta harflarga oâ€˜tkazilsin.
// Foydalanish: toUpperCase()
function shout(str) {
  // Qichqiring! Lekin faqat kod bilan ðŸ™ƒ
   return str.toUpperCase();
}
let message = " Salom Ozimga!";
console.log(shout(message));


// 7-masala
// Massivda qiymat bor-yoâ€˜qligini tekshiring.
// Foydalanish: includes()
function hasValue(arr, value) {
  // Bor yoâ€˜q, tekshiring... lekin kod bilan ðŸ”
    return arr.includes(value);

}
let fruits = ["apple", "banana", "orange"];
console.log(hasValue(fruits, "banana")); 

// ================================
//     Oâ€˜RTACHA DARAJADAGI MASALALAR (7 ta)
// ================================

// 8-masala
// Berilgan soâ€˜z "a" harfi bilan boshlanishini tekshiring.
// Foydalanish: startsWith()
function startsWithA(str) {
  // Harflarning sardori kimligini aniqlang ðŸ‘‘
    return str.startsWith("a");
}
let meva = "apilsin";
console.log(startsWithA(meva)); 


// 9-masala
// Berilgan array ichida "apple" borligini aniqlang.
// Foydalanish: includes()
function containsApple(arr) {
  // Meva ichidan olmani toping ðŸŽ
   return arr.includes("apple");
}
let mevalar3 = ["banana", "kiwi",  "orange"];
console.log(containsApple(mevalar3));

// 10-masala
// Object ichidagi barcha kalitlarni arrayga aylantiring.
// Foydalanish: Object.keys()
function getKeys(obj) {
  // Kalitni toping, eshikni oching! ðŸ—ï¸
    return Object.keys(obj);
}
let Men = { name: "Mohi", age : 18, city : "Fargona" };
console.log(getKeys(Men));

// 11-masala
// Object ichidagi barcha qiymatlarni arrayga oâ€˜tkazing.
// Foydalanish: Object.values()
function getValues(obj) {
  // Qiymat izlaymiz ðŸ’¸
  return Object.values(obj);
}
let Men2 = { name: "Mohi", age : 18, city : "Fargona" };
console.log(getValues(Men2));

// 12-masala
// String ichidagi barcha boâ€˜sh joylarni olib tashlang.
// Foydalanish: replaceAll(" ", "")
function removeSpaces(str) {
  // Joy yoâ€˜q, harf koâ€˜p! ðŸ”¡
  return str.replaceAll(" ", "");
}
let text2 = "     Imtihon  eng yomon kun!   ";
console.log(removeSpaces(text2));

// 13-masala
// Arrayning teskari koâ€˜rinishini qaytaring.
// Foydalanish: reverse()
function reverseArray(arr) {
  // Orqaga buriling, orqagaaa! â†©ï¸
  return arr.reverse();
}

let oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May"];
console.log(reverseArray(oylar));


// 14-masala
// Object.entries orqali objectni key-value arrayga aylantiring.
// Foydalanish: Object.entries()
function objectToEntries(obj) {
  // Har bir kalit-qiymatni juftlab oling ðŸ‘¯
  return Object.entries(obj);
}
let Men3 = { name: "Mohi", age : 18, city : "Fargona" };
console.log(objectToEntries(Men3));

// ================================
//         QIYIN MASALALAR (7 ta)
// ================================

// 15-masala
// Object ichida "admin" degan key bormi?
// Foydalanish: hasOwnProperty()
function hasAdmin(obj) {
  // Hali ham yashirinib yurgan adminni toping ðŸ”
  return obj.hasOwnProperty("admin");

}
let user = { name: "Mohi", age: 18, city: "Fargona", admin: true };
console.log(hasAdmin(user));

// 16-masala
// Stringning oxirgi 3 ta harfini ajrating.
// Foydalanish: slice()
function lastThree(str) {
  // Oxirgi uchlikni e'tiborsiz qoldirmang ðŸŽ¯
  return str.slice(-3);
}
let message2 = "Salom 4-oy";
console.log(lastThree(message2));


// 17-masala
// Object.entries() + fromEntries() orqali object ichidagi "age" qiymatiga 1 qoâ€˜shing.
function increaseAge(obj) {
  // Yosh yashiringan, toping va koâ€˜paytiring ðŸ‘¶âž•
  let entries = Object.entries(obj);
  let updatedEntries = entries.map(([key, value]) => {
    if (key === "age") {
      return [key, value + 1];
    }
    return [key, value];
  });
  return Object.fromEntries(updatedEntries);
}

let Men4 = { name: "Mohi", age: 18, city: "Fargona" };
console.log(increaseAge(Men4));

// 18-masala
// Stringni ichidagi har bir boâ€˜shliqdan keyin vergul qoâ€˜shing.
// Masalan: "salom dunyo" => "salom, dunyo"
function addComma(str) {
  // Gaplar orasiga chiroyli nuqta-vergullar qoâ€˜shamiz âœ’ï¸
  return str.replaceAll(" ", ", ");
}
let sentence = "Salom dunyo";
console.log(addComma(sentence));

// 19-masala
// Massivda oxirgi boâ€˜lib qayerda "banana" turganini toping.
// Foydalanish: lastIndexOf()
function lastBananaIndex(arr) {
  // Oxirgisi qayerda? Bananalardan shubhalanamiz ðŸŒ
    return arr.lastIndexOf("banana");
}
let fruits2 = ["apple", "banana", "orange", "banana"];
console.log(lastBananaIndex(fruits2));

// 20-masala
// Massivda 2-dan 5-gacha boâ€˜lgan elementlarni kesib oling.
// Foydalanish: slice()
function sliceMiddle(arr) {
  // Oâ€˜rtadagi boâ€˜limni ajratib oling ðŸ“¦
  return arr.slice(2, 5);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sliceMiddle(numbers));

// 21-masala
// String ichida "javascript" soâ€˜zini "JS" bilan almashtiring.
// Foydalanish: replaceAll()
function shortenJS(str) {
  // Uzun soâ€˜zlardan qutulamiz, qisqacha ayting ðŸ§
  return str.replaceAll("javascript", "JS");

}
let yanaSozlar = "javascript - bu juda kuchli dasturlash tili";
console.log(shortenJS(yanaSozlar));