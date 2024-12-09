// while loop programs

// while (condition) {
    // code to be executed as long as the condition is true
// }

// ========================================================================================================================================================================

// 1) Print out 10 to 1

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// =======================================================================================================================================================================

// 2) Print out 51 to 79

// let j = 51;
// while (j <= 79) {
//     console.log(j);
//     j++;
// }

// =========================================================================================================================================================================

// 3) Enter n and print out 1 to n

// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// while (k <= n) {
//     console.log(k);
//     k++;
// }

// ======================================================================================================================================================================

// 4) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// while (i <= 1) {
//     console.log(i);
//     i++;
// }

// ============================================================================================================================================================

// 5) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// while (i <= n) {
//     console.log(i);
//     i++;
// }

// ========================================================================================================================================================================

// 6) Enter n and print out odd numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 1;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

// ====================================================================================================================================================================

// 7) Enter n and print out even numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 0;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

// ====================================================================================================================================================================

// 8) Series print out 1, 4, 3, 16, 5, 36.......

// let i = 1;
// while (i <= 10) {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// }

// ==========================================================================================================================================================================

// 9) Series print out 1, 1, 2, 3, 5, 8 .....

// let a = +prompt("Enter a Number:");
// let x = 0, y = 1, z;
// let i = 0;

// while (i <= a) {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// }

// ===================================================================================================================================================================

// 10) Series print out 1, 4, 12, 32, 80, 192, 448 .......

// let n = 10;
// let first = 1, second = 4;
// let i = 3;

// console.log(first);
// console.log(second);

// while (i <= n) {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
//     i++;
// }

// ========================================================================================================================================================================

// 11. Find Out Factorial of Given Number.

// let j = +prompt("Enter a Number :");
// let k = 1;

// if (j < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// } else if (j === 0) {
//     console.log("The Factorial Number is : 1");
// } else {
//     let i = 1;
//     while (i <= j) {
//         k *= i;
//         i++;
//     }
//     console.log("The Factorial Number is : " + k);
// }


// ========================================================================================================================================================================

// 12. Enter n and Print Out Total Number's of Sum.

// let l = +prompt("Enter a Number :");
// let sum = 0;

// if (l <= 0) {
//     console.log("Error! Please Enter a Positive Number.");
// } else {
//     let i = 1;
//     while (i <= l) {
//         sum += i;
//         i++;
//     }
//     console.log("The Sum of Numbers from 1 to " + l + " is : " + sum);
// }
//   ===============================================================================================================================================================

// 13. Enter n and Print Out Total Odd Number's Sum.

// let m = +prompt("Enter a Number :");
// let oddSum = 0;

// if (m <= 0) {
//     console.log('Error! Please Enter a Positive Number.');
// } else {
//     let i = 1;
//     while (i <= m) {
//         if (i % 2 == 1) {
//             oddSum += i;
//         }
//         i++;
//     }
//     console.log("The Sum of Odd Numbers from 1 to " + m + " is : " + oddSum);
// }

// ===================================================================================================================================================================

// 14. Enter n and Print Out Total Even Number's Sum.

// let n = +prompt("Enter a Number :");
// let evenSum = 0;

// if (n <= 0) {
//     console.log('Error! Please Enter a Positive Number.');
// } else {
//     let i = 1;
//     while (i <= n) {
//         if (i % 2 == 0) {
//             evenSum += i;
//         }
//         i++;
//     }
//     console.log("The Sum of Even Numbers from 1 to " + n + " is : " + evenSum);
// }

// =======================================================================================================================================================================


