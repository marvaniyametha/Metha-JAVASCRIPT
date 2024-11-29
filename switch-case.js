// var num1=Number(prompt("Enter the first number : "));
//         var num2=Number(prompt("Enter the second number : "));
//         var choice= prompt("Enter your choice");
//         switch(choice){
//             case "add":
//                 console.log("addition is : " + (num1 + num2));
//                 break;
//             case "sub":
//                     console.log("substrction is : " + (num1 - num2));
//                     break;
//             case "multi":
//                     console.log("product is : " + (num1 * num2));
//                     break;
//             case "product":
//                     console.log("divison is : " + (num1 / num2));
//                     break;
//             default:
//                     console.log("you choice wrong");
//                     break;
//         }



let marks;

marks = Number(prompt("enter your marks"));

if (marks >= 90 && marks < 100){
    console.log("Your Grade is A")
}
else if(marks >= 80 && marks < 90){
    console.log("Your Grade is B")
}
else if(marks >= 70 && marks < 80){
    console.log("Your Grade is C")
}
else if(marks >= 60 && marks < 70){
    console.log("Your Grade is D")
}
else if(marks >= 50 && marks < 60){
    console.log("Your Grade is E")
}
else if(marks >= 33 && marks < 50){
    console.log("You are Pass!!!")
}
else if(marks >=0 &&  marks < 33){
    console.log("Sorry!next time better luck!")
}
else{
    console.log("enter a valid number")
}


