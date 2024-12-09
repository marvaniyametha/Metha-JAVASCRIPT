
// Do while loop

// syntax:-

// do {
//     // Block of code to be executed
// } while (condition);


/*
let i = 0;

do {
    console.log(i);  // Prints the value of i
    i++;             // Increments i by 1
} while (i < 5);     // Continues until i is no longer less than 5

*/


// =======================================================================================================================================================
// i) Print out 10 to 1

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

// ==============================================================================================================================================================

// ii) Print out 51 to 79

// let j = 51;
// do {
//     console.log(j);
//     j++;
// } while (j <= 79);

// =======================================================================================================================================================


// iii) Enter n and print out 1 to n

// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= n);


// ===========================================================================================================================================================

// iv) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= 1);


// =========================================================================================================================================================

// v) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= n);

// ==============================================================================================================================================================


// vi) Enter n and print out odd numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);


// ===============================================================================================================================================================

// vii) Enter n and print out even numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 0;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);

// ========================================================================================================================================================

// viii) Series print out 1, 4, 3, 16, 5, 36.......

// let i = 1;
// do {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// } while (i <= 10);


// ========================================================================================================================================================

// ix) Series print out 1, 1, 2, 3, 5, 8 .....

// let a = +prompt("Enter a Number:");
// let x = 0, y = 1, z;
// let i = 0;
// do {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// } while (i <= a);
  
// ============================================================================================================================================================

// x) Series print out 1, 4, 12, 32, 80, 192, 448 .......

// let n = 10;
// let first = 1, second = 4;
// let i = 3;

// console.log(first);
// console.log(second);

// do {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
//     i++;
// } while (i <= n);

// ==================================================================================================================================================================

// 11. Find Out Factorial of Given Number. 

// let j = +prompt("Enter a Number :");
// let k = 1;

// if (j < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// } else if (j === 0) {
//     console.log("The Factorial Number is : 1");
// } else {
//     let i = 1;
//     do {
//         k *= i;
//         i++;
//     } while (i <= j);
//     console.log("The Factorial Number is : " + k);
// }

// ====================================================================================================================================================================
// 12. Enter n and Print Out Total Number's of Sum.

// let l = +prompt("Enter a Number :");
// let sum = 0;

// if (l <= 0) {
//     console.log("Error! Please Enter a Positive Number.");
// } else {
//     let i = 1;
//     do {
//         sum += i;
//         i++;
//     } while (i <= l);
//     console.log("The Sum of Numbers from 1 to " + l + " is : " + sum);
// }

// =====================================================================================================================================================================

// 13. Enter n and Print Out Total Odd Number's Sum.

// let m = +prompt("Enter a Number :");
// let oddSum = 0;

// if (m <= 0) {
//     console.log('Error! Please Enter a Positive Number.');
// } else {
//     let i = 1;
//     do {
//         if (i % 2 == 1) {
//             oddSum += i;
//         }
//         i++;
//     } while (i <= m);
//     console.log("The Sum of Odd Numbers from 1 to " + m + " is : " + oddSum);
// }

// =====================================================================================================================================================================

// 14. Enter n and Print Out Total Even Number's Sum.

// let n = +prompt("Enter a Number :");
// let evenSum = 0;

// if (n <= 0) {
//     console.log('Error! Please Enter a Positive Number.');
// } else {
//     let i = 1;
//     do {
//         if (i % 2 == 0) {
//             evenSum += i;
//         }
//         i++;
//     } while (i <= n);
//     console.log("The Sum of Even Numbers from 1 to " + n + " is : " + evenSum);
// }

// ========================================================================================================================================================================