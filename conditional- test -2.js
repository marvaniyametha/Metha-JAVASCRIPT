// 1.  Enter electricity UNIT and calculate amount to pay 
// ~ For first 50 units,Rs:1/unit 
// ~ For next 100 units,Rs:2/unit 
// ~ For next 100 units,Rs:3/unit
// ~ for units above 250,4/units
// ~ For all bills above 150 units  an additional 
// surcharge of 20% of total bill amount is added. 

// var  units = 65; 
// var amount = 21;
// if (units > 50) 
//     {
//     amount += (units - 50) * 2;
//     units = 50;
// }
// if (units > 150) 
//     {
//     amount += (units - 150) * 3;
//     units = 150;
// }
// if (units > 250)
//     {
//     amount += (units - 250) * 4;
//     units = 250;
// }
// amount += units * 1;

// // Add 20% surcharge if total units  150


// if (units > 150) {
//     amount += amount * 0.2;
// }

// console.log("Total bill:₹"+amount);


// ----------------------------------------------------------------------------------------------------------------------------------------------
// 3.(I =PNR/100)principal amount (p)interest Rate No.of years (N)
// (IF 3<N<=5 then R is 3 |if 5<N<=8 then R is 5| if 8<N<=12 then R is 12| else R is 15)
// var P=1000;
// var N = 7;    
// var R;         

// if (N >3 && N<= 5) {
//     R = 3;
// } else if (N >5 && N<=8) {
//     R = 5;
// } else if (N >8 && N<=12) {
//     R = 12;
// }
//  else 
// {
//     R = 15;
// }
// var I = (P * R * N) / 100;

// console.log("Principal Amount :" + P);
// console.log("Number of Years :" + N);
// console.log("Interest Rate :" + R + "%");
// console.log("Total Interest:"+I);
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 2.write a JAVASCRIPT program to print season accordinguser input using switch case
// (e.g 1 to 4 for "winter",5 to 8 for "summer", 9 to 12 "Monsoon" then add any number print "Invalid season"etc).

// var season=12;
// switch (season){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     console.log("WINTER")
//     break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
    // console.log("SUMMER")
    // break;
    // case 9:
    // case 10:
    // case 11:
    // case 12:
    // console.log("MONSOON")
    // break;
    // default:
    // console.log("Invalid")
// }
// output:-MONSOON
// ------------------------------------------------------------------------------------------------------------------------------------------------

// 4. write a JAVASCRIPT program to check voting Eligibility.

// var age=22;
// if(age>=18){
//     console.log("eligable for vote");
// }else{
//     console.log(" not eligale for vote ");
// }
//   output:-eligable for vote


// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 5.write a JAVASCRIPT programto classify age groups.

// let age=20;
// if(age<=12){
//     console.log(" you are child");  
// }else if(age>12 && age<=18){
//     console.log("you are in teenager");
// }else if(age>18 && age<=58){
//     console.log("you are adult");
// }else if(age>=58){
//     console.log("your age is old");
// }else{
//     console.log("invalid age");
// }

// output:- you are younger


 