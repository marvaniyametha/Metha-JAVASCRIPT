// 1. Write JS Program to check number is Palindrome or not

// let number = 654;
// let reversed = 0;
// for (let temp = number; temp > 0; temp = (temp - temp % 10) / 10) {
//     reversed = reversed * 10 + temp % 10;
// }
// if (number === reversed) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }

// output:-
//  654 :-Not a Palindrome
//  121:- a Palindrome

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Print Series 1, 4, 3, 16, 5, ....

// let i = 1;
// while (i <= 10) {
//      console.log(i % 2 === 0 ? i * i : i);
//     i++;
// }

// output:-
// 1
// 4
// 3
// 16
// 5
// 36
// 7
// 64
// 9
// 100

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3.Print Multiplication table of n

//  let n=10;
//  for(var i=1 ; i<=10;i++){
//     console.log(n + " x " + i + " = " +(n*i));
//  }

//  output:-
//  10 x 1 = 10
//  10 x 2 = 20
//  10 x 3 = 30
//  10 x 4 = 40
//  10 x 5 = 50
//  10 x 6 = 60
//  10 x 7 = 70
//  10 x 8 = 80
//  10 x 9 = 90
//  10 x 10 = 100

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4.find out sum of digit of given number

// let number = Number(prompt("enter the number"));
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = (number - (number % 10)) / 10;
// }

// console.log(" sum of the digit is:", sum);

// output:-1819
// sum of the digit is: 19

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5.print series 1, 1, 2, 3, 5, 8, ...

// let a = +prompt("Enter a Number:");
// let x = 1, y = 1, z;
// let i = 1;
// do {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// } while (i <= a);

// output:-
// 2loop-exam.js:87 1
// loop-exam.js:87 2
// loop-exam.js:87 3
// loop-exam.js:87 5
// loop-exam.js:87 8
// loop-exam.js:87 13
// loop-exam.js:87 21
// loop-exam.js:87 34
// loop-exam.js:87 55