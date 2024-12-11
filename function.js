// function:-
    // perform to specific task or work.


/*
        syntax:-
            function fun_name(){
                statement...
            }
                fun_name();  ==> call the function
 */


// two var sum,mul.

// ADD

// function add (){
//   let a=10,b=19;
//   console.log("Add of a and b:",a+b);
// }
// add();


// SUB

// function Sub (){
//   let a=5,b=2;
//   console.log("Sub of a and b:",a-b);
// }
// Sub();

// mul

// function mul (){
//     let a=10,b=19;
//     console.log("Mul of a and b:",a*b);
//   }
//   mul();

// div.

// function div (){
//     let a=11,b=1;
//     console.log("Div of a and b:",a/b);
//   }
// div();


// ==============================================================================

// -------------------------------Loop Program Convert Into Function.-------------------------------

// 1.Print Out 10 to 1.

// function Num() {
    
// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);
// }

// Num();


//====================================================================================================================================================================== 


// 2.Print Out 51 to 79.

// function printNum() {
//     for (let i = 51; i <= 79; i++) {
//         console.log(i);
//     }
// }
// printNum();

// ====================================================================================================================================================================


// 3. Enter n and print out 1 to n.

// function numPrint() {
   
// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= n);
// }
// numPrint();

// =====================================================================================================================================================================


// 4. Enter n and print out -n to 1.

// function randomNumPrintNum() {
//     let n = +prompt("Enter n Number :");
//     for (let i = -n; i <= 1; i++) {
//         console.log(i);
//     }
// }
// randomNumPrintNum();

// ==================================================================================================================================================================


// 5. Enter n and print out -n to n.

// function randomNum() {
//     let a = +prompt("Enter a Number :");
//     for (let i = -a; i <= a; i++) {
//         console.log(i);
//     }
// }
// randomNum();


// ===============================================================================================================================================================


// 6. Enter n and print out odd num upto n.

// function oddnum() {
//     let b = +prompt("Enter a Number :");
//     for (let i = 1; i <= b; i += 2) {
//         console.log(i);
//     }
// }
// oddnum();

// ================================================================================================================================================================


// 7. Enter n and print out even num upto n.

// function evenNum() {
//     let c = +prompt("Enter a Number :");
//     for (let i = 0; i <= c; i += 2) {
//         console.log(i);
//     }
// }
// evenNum();

// ===============================================================================================================================================================


// 8. series print out 1, 4, 3, 16, 5, .....customSeries

// function seriesPrint() {
//     let d = +prompt("Enter a Number :");
//     for (let i = 0; i <= d; i++) {
//         if (i % 2 == 1) {
//             console.log(i);
//             i++;
//             console.log(i ** 2);
//         }
//     }
// }
// seriesPrint();

// =============================================================================================================================================================


// 9. series print out 1, 1, 2, 3, 5, 8 .....fibonacciSeries

// function printFibonacci() {
//     let e = +prompt("Enter a Number :");
//     let x = 0; y = 1;
//     let z;

//     for (let i = 0; i <= e; i++) {
//         console.log(x);

//         z = x + y;
//         x = y;
//         y = z;
//     }
// }
// printFibonacci();

// =============================================================================================================================================================


// 10. series print out 1, 4, 12, 32, .....GeometricSeries

// function printGeometricSeries() {
//     let f = +prompt("Enter a Number :");
//     let g = 2, h = 0, a = 1;


//     for (let i = 1; i <= f; i++) {
//         console.log(i * (g ** h));
//         h++;
//     }  
// }

// ==============================================================================================================================================


// 11. Find Out Factorial of Given Number.

// function factorial() {
//     let j = +prompt("Enter a Number :");
//     let k = 1;

//     for (let i = 1; i <= j; i++) {
//         if (j < 0) {
//             console.log('Error! Factorial for negative number does not exist.');
//         }
//         else if (j === 0) {
//             console.log("The Factorial Number is : 1")
//         }
//         else {
//             k *= i;
//             console.log(k);
//         }
//     }
// }
// factorial();


// ====================================================================================================================================================


// 12. Enter n and Print Out Total Number's of Sum.

// function totalnumSum() {
//     let l = +prompt("Enter a Number :");
//     let sum = 0;

//     for (let i = 1; i <= l; i++) {
//         if (l > 0) {
//             sum += i;
//             console.log("The sum of numbers from 1 to " + i + " is : " + sum);
//         }
//         else {
//             console.log("Error! Please Enter a Positive Number.");
//         }
//     }
// }
// totalnumSum();


// =====================================================================================================================================================


// 13. Enter n and Print Out Total Odd Number's Sum.

// function totalOddnumSum() {
//     let m = +prompt("Enter a Number :");
//     let oddSum = 0

//     for (let i = 1; i <= m; i++) {
//         if (m > 0) {
//             if (i % 2 == 1) {
//                 oddSum += i;
//                 console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + oddSum);
//             }
//         }
//         else {
//             console.log('Error! Please Enter a Positive Number.');
//         }
//     }
// }
// totalOddnumSum();

//=============================================================================================================================================================== 


// 14. Enter n and Print Out Total Even Number's Sum.

// function totalEvennum() {
//     let n = +prompt("Enter a Number :");
//     let evenSum = 0

//     for (let i = 1; i <= n; i++) {
//         if (n > 0) {
//             if (i % 2 == 0) {
//                 evenSum += i;
//                 console.log("The Sum of Even Numbers from 1 to " + i + " is : " + evenSum);
//             }
//         }
//         else {
//             console.log('Error! Please Enter a Positive Number.');
//         }
//     }
// }
// totalEvennum();

//==========================================================================================================================================================

