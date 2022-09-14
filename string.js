var str = "hello pepcoders";
console.log(str);
// console.log(str[4]);
// console.log(str.length);
//string method
//extraction method
//1.slice method
//slice (start,end+1) -> start index is inclusive and end index is exclusive
var slicedStr = str.slice(2,7);
console.log(slicedStr);
var slicedStr = str.slice(6);
console.log(slicedStr);

//substring
 let ans = str.substr(2,6);
 console.log(ans);
 console.log(str);
 //replacing
 str = "YLO";
 console.log(str);

 //to lower and upper
 console.log(str.toLowerCase)
str = "fomo";
console.log(str.toUpperCase);
console.log(str);

//concatenation
let firstStr = "you guys are";
let secondStr = "so smart";
let concatenateStr = firstStr+secondStr;
console.log(concatenateStr);

//concat method
let concatStr =firstStr.concat(secondStr," and me");
console.log(concatStr);

//trim Method;
let trimStr = "             hello how are you";
console.log(trimStr);
console.log(trimStr.trim());


 