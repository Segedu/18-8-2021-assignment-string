//1
// function stringLength(randomString) {
//   if (randomString.length > 5) {
//     return "long";
//   }
//   return "short";
// }
// var str = prompt("write/search something");
// var result = stringLength(str);
// console.log(result);

//2
// function isAInString(randomString) {
//   if (randomString.indexOf("a") > -1) {
//     return randomString.indexOf("a");
//   }
//   return "not found";
// }
// var str = prompt("write/search something");
// var result = isAInString(str);
// console.log(result);

//3
// function isRInString(randomString) {
//   if (randomString.indexOf("r") > -1) {
//     return true;
//   }
//   return false;
// }
// var str = prompt("write/search something");
// var result = isRInString(str);
// console.log(result);

//4
// function isCharInString(randomString, randomChar) {
//   if (randomString.indexOf(randomChar) > -1) {
//     return true;
//   }
//   return false;
// }
// var str = prompt("write/search something");
// var char = prompt("choose one letter");
// var result = isCharInString(str, char);
// console.log(result);

//5
// function lastCharInString(randomString, randomChar) {
//   if (randomString.indexOf(randomChar) > -1) {
//     return randomString.lastIndexOf(randomChar);
//   }
//   return "the letter doesn't exist in the sentence/word ";
// }
// var str = prompt("write/search something");
// var char = prompt("choose one letter");
// var result = lastCharInString(str, char);
// console.log(result);

//6
// function threeFirstLetters(someString) {
//   return someString.substr(0, 3);
// }
// var givenName = "sayonara";
// var result = threeFirstLetters(givenName);
// console.log(result);

//7
// function fourLettersFromY(someString) {
//   return someString.substr(2, 4);
// }
// var givenName = "sayonara";
// var result = fourLettersFromY(givenName);
// console.log(result);

//8
// function fromLetterOToEnd(someString) {
//   return someString.substring(3);
// }
// var givenName = "sayonara";
// var result = fromLetterOToEnd(givenName);
// console.log(result);

//9
// function getFromIndexIfExistToEnd(randomString, randomIndex) {
//   if (randomIndex > randomString.length) {
//     return "the index bigger than sentence/word length";
//   }
//   return randomString.substring(randomIndex);
// }
// var randomStr = prompt("write/search something");
// var randomChar = Number(prompt("choose A number"));
// var result = getFromIndexIfExistToEnd(randomStr, randomChar);
// console.log(result);

//10
// function threeLettersFromIndex(randomString, randomIndex) {
//   if (randomIndex > randomString.length) {
//     return "The number bigger than the sentence/word length";
//   }
//   return randomString.substr(randomIndex, 4);
// }
// var str = prompt("write/search something");
// var indx = Number(prompt("choose a number"));
// var result = threeLettersFromIndex(str, indx);
// console.log(result);

//11
// function printStringByNumbers(someString, firstNum, secondNum) {
//   if (firstNum / 1 == firstNum && secondNum / 1 == secondNum) {
//     return someString.substring(firstNum, secondNum);
//   }
// }
// var str = prompt("write something");
// var numOne = Number(prompt("enter number"));
// var numTwo = Number(prompt("enter number"));
// var result = printStringByNumbers(str, numOne, numTwo);
// console.log(result);

//12
// function firstThreeLetters(randomString) {
//   return randomString.substring(0, 3);
// }
// var randStr = "sayonara";
// var result = firstThreeLetters(randStr);
// console.log(result);

// 13;
// function fromLetterYToEnd(randomString) {
//   return randomString.substring(2, 6);
// }
// var randStr = "sayonara";
// var result = fromLetterYToEnd(randStr);
// console.log(result);

//14
// function fromOToEnd(randomString) {
//   return randomString.substring(3);
// }
// var randStr = "sayonara";
// var result = fromOToEnd(randStr);
// console.log(result);

//15
// function lengthOfFullName(randomName) {
//   return randomName.length;
// }
// var userInput = prompt("enter full name");
// var result = lengthOfFullName(userInput);
// console.log(result);

// function isSpaceInFullName(randomName) {
//   if (randomName.indexOf(" ") > -1) {
//     return "there is space in the name";
//   }
//   return false;
// }
// var userInput = prompt("enter full name");
// var result = isSpaceInFullName(userInput);
// console.log(result);

// function printFirstLastNameSparate(randomName) {
//   console.log(randomName.substring(0, randomName.indexOf(" ")));
//   return randomName.substring(randomName.indexOf(" ") + 1);
// }
// var userInput = prompt("enter full name");
// var result = printFirstLastNameSparate(userInput);
// console.log(result);

//16
// function isStringsEqual(firstRandStr, secondRandStr) {
//   if (firstRandStr.toLowerCase() == secondRandStr.toLowerCase()) {
//     return true;
//   }
//   return false;
// }
// var firstStr = prompt("write something");
// var secondStr = prompt("write something");
// var result = isStringEqual(firstStr, secondStr);
// console.log(result);

//17
// function isStringsEqual(firstRandStr, secondRandStr) {
//   if (firstRandStr.toUpperCase() == secondRandStr.toUpperCase()) {
//     return true;
//   }
//   return false;
// }
// var firstStr = prompt("write something");
// var secondStr = prompt("write something");
// var result = isStringsEqual(firstStr, secondStr);
// console.log(result);

//18
// function printLongestName(firstString, secondString) {
//   if (firstString.length > secondString.length) {
//     return firstString;
//   }
//   if (secondString.length > firstString.length) {
//     return secondString;
//   }
// }
// var firstStr = prompt("write something");
// var secondStr = prompt("write something");
// var result = printLongestName(firstStr, secondStr);
// console.log(result);

//19
// function isAInFirstName(randomName) {
//   if (randomName.substring(0, randomName.indexOf(" ")).indexOf("a") > -1) {
//     return "first name include 'a'";
//   }
//   return false;
// }
// var fullName = prompt("write first name");
// var result = isAInFirstName(fullName);
// console.log(result);

// function isApiInLastName(randomName) {
//   if (randomName.substring(randomName.indexOf(" ") + 1).indexOf("api") > -1) {
//     return "last name include api";
//   }
//   return false;
// }
// var fullName = prompt("write first name");
// var result = isApiInLastName(fullName);
// console.log(result);

//20
// function isLongThanFive(someString) {
//   if (someString.length > 5) {
//     return "long";
//   }
//   return "short";
// }
// var randomStr = prompt("write something");
// var result = isLongThanFive(randomStr);
// console.log(result);

//21
// function isShortThanThreeChar(randCountry) {
//   if (randCountry.length < 3) {
//     return "yes";
//   }
//   return "no";
// }
// var randomStr = prompt("ENTER COUNTRY NAME");
// var result = isShortThanThreeChar(randomStr);
// console.log(result);

//22
// function getStrOrIndexByStrLength(randStr, randChar) {
//   if (randStr.length > 6) {
//     return randStr;
//   }
//   return randStr.indexOf(randChar);
// }
// var str = prompt("enter something");
// var char = prompt("enter letter");
// var result = getStrOrIndexByStrLength(str, char);
// console.log(result);

//23
// function isCharInStr(str, char) {
//   if (str.indexOf(char) > -1) {
//     return str.indexOf(char);
//   }
//   return str;
// }
// var randStr = prompt("enter word");
// var randChar = prompt("enter letter");
// var result = isCharInStr(randStr, randChar);
// console.log(result);

//24
// function printWithFormat(firstRan, secondRan) {
//   return firstRan[0].toLowerCase() + ". " + secondRan.toUpperCase();
// }
// var randStr = prompt("enter first name");
// var randLast = prompt("enter last name");
// var result = printWithFormat(randStr, randLast);
// console.log(result);

//25
// function returnLongstPrintShortrLastName(firstLast, secondLast) {
//   if (firstLast.length > secondLast.length) {
//     console.log(secondLast);
//     return firstLast;
//   }
//   if (secondLast.length > firstLast.length) {
//     console.log(firstLast);
//     return secondLast;
//   }
// }
// var randLastName = prompt("your last name");
// var secRandLastName = prompt("your best friend last name");
// var result = returnLongstPrintShortrLastName(randLastName, secRandLastName);
// console.log(result);

//26
// function isCharInName(someName, someChar) {
//   if (someName.indexOf(someChar) > -1) {
//     return someName;
//   }
//   console.log("char doesn't exist");
// }
// var userName = prompt("enter name");
// var userChar = prompt("enter letter");
// var result = isCharInName(userName, userChar);
// console.log(result);

//27
// function getName(randomName) {
//   if (randomName.indexOf(" ") == -1) {
//     return randomName[0].toUpperCase() + randomName.substring(1).toLowerCase();
//   }
//   if (randomName.indexOf(" ") > -1) {
//     var array = [];
//     array.push(
//       randomName.substring(randomName[0], randomName.indexOf(" ") - 1),
//       randomName.substring(randomName.indexOf(" "))
//     );
//     return array;
//   }
//   if (randomName.indexOf(" ") > -1 && randomName.lastindexOf(" ") > -1) {
//     randomName = {
//       firstName: randomName.substring(0, randomName.indexOf(" ") - 1),
//       middleName: randomName.substring(
//         randomName.indexOf(" "),
//         randomName.lastindexOf(" ") - 1
//       ),
//       lastName: randomName.substring(randomName.lastindexOf(" ") + 1),
//     };
//     return randomName;
//   }
// }
// var userInput = prompt("enter name");
// var result = getName(userInput);
// console.log(result);
