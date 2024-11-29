//conditional statement..
//if else,nested,ladder,switchcase
//1.if else statement
/*
    if(condition){
    statement...
    }
    else{
    statement...
    }
*/ 
//some examples..
// let num1=21,num2=34;
// if(num1<num2){
//     console.log("small number is:",num1);
// }else{
//     console.log("smaller number is:",num2);
// }

//ternery statement...
/*
    condition?ture:false
 */
//some examples..
//  let a=9,b=10;
// // (a<b)?console.log("small number is",a):console.log("smaller number is",b)
// console.log("small number is ",a<b?a:b);

//swapping number using third var and without third var
// let a=34,b=54,c;
// console.log("before swapping");
// console.log("A----->",a);
// console.log("B----->",b);

// c=a;//with using third var
// a=b;
// b=c;

// a=a+b;//without using third var
// b=a-b;
// a=a-b;

// console.log("After swapping");
// console.log("A----->",a);
// console.log("B----->",b);

// ==> convert feet into inches
var f=5;
var ans=f*12;
console.log("feet to inches = "+ans);

//==> convert Fahrenheit to celsius
var f=40;
var ans=(f-32)*5/9; 
console.log("Fahrenheit to celsius ans is  = "+ans);

//==> convert celsius to Fahrenheit
var c=70;
var ans=(c*9/5)+32; //(0°C × 9/5) + 32 = 32°F
console.log("celsius to Fahrenheit ans is  = "+ans);

//==>convert centimeter into meter
var c=50;
var ans=c/100;
console.log("centimeter to meter ans is  = "+ans);

//==> find out the area of triangle
var b=50;
var h=20;
var ans=1/2*b*h; 
 console.log("area of triangle = "+ans);

//==> find out the area of Rectangle
var l=10;
var w=20;
var ans=l*w; 
console.log(" area of Rectangle = "+ans);

//==> find out the area of circle
var c=40;
var ans=3.14*c;
console.log("area of circle = "+ans);

//==> find out simple intrest
var p=100;
var r=10;
var t=2;
var ans=(p*r*t)/100;
console.log("simple intrest = "+ans);

//==>find out salary of employee (basic , HRA(12%),DA (18%))
var B=20000;
var HRA=B*0.12;
var DA=B*0.18;
var ans=B+HRA+DA;
console.log("salary of employee " +ans)