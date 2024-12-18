// 1 .write a simple JAVASCRIPT  program to print expected output using the following array.

// let mycolor = ["red", "green", "white", "black"];
// console.log(mycolor);
// Output:- [ 'red', 'green', 'white', 'black' ]

// let mycolor2 = ["red", "green", "white", "black"];
// mycolor2.pop(); 
// console.log(mycolor2);
//  Output:- [ 'red', 'green', 'white' ]

// let mycolor3 = ["red", "green", "white", "black"];
// mycolor3.splice(1); 
// console.log(mycolor3);
// Output:- [ 'red' ]

// let mycolor4 = ["red", "green", "white", "black"];
// mycolor4.splice(3, 2); 
// console.log(mycolor4);
// Output:- [ 'red', 'green', 'white' ]

// let mycolor5 = ["red", "green", "white", "black"];
// mycolor5.push("orange"); 
// console.log(mycolor5);
//  Output:- [ 'red', 'green', 'white', 'black', 'orange' ]

// ===================================================================================================================================================================

// 2.

// Sum using for loop
// function Loop(arr) {
//     let sum = 0;
//     for (let num of arr) sum += num;
//     return sum;
//   }
  
//   // Sum using forEach loop
//   function Each(arr) {
//     let sum = 0;
//     arr.forEach(num => sum += num);
//     return sum;
//   }
  
//   let numbers = [1, 2, 3, 4, 5];
  
//   console.log(Loop(numbers));  // Output: 15
//   console.log(Each(numbers));  // Output: 15

// ==================================================================================================================================================================

// 3.
// function mininMax(arr) {
    // let max = arr[0];let min = arr[0];

    // for (let i = 1; i < arr.length; i++) {
        // if (arr[i] > max) {
            // max = arr[i];  
        // } else {
            // if (arr[i] < min) {
                // min = arr[i];  
            // }
        // }
    // }

    // console.log("Maximum Value:", max);
    // console.log("Minimum Value:", min);
// }

// let numbers = [18, 19, 1, 8, 2004, 2003];
// mininMax(numbers);

// output:-
// aximum Value: 2004
// Minimum Value: 1

//  ================================================================================================================================================================ 
// 6.

// let arr3=[2,5,6,3,8,9]
// let ans =arr3.map((ele,index)=>{
//     return ele * 2;
// })
// console.log(ans);

// output:-
// [ 4, 10, 12, 6, 16, 18 ]

// ========================================================================================================================================================================

// 8. 

// let words =['python','javascript','Go','Java','PHP','Ruby']
// let mn=words.filter((ele,index)=>{
//     return ele.length>8
// })
// console.log(mn);

// output:-
// [ 'javascript' ]

// ====================================================================================================================================================================

// 9.
// let x=["a","i","r","p","l","a","n","e"]
// let arr=x.find((ele,index)=>{
//     return ele ==="r"
// })
// console.log(arr);
// output:- r


// let m = "A New Java Book";
// lowercase
// let lowercase = m.toLowerCase(); 

 //  uppercase
// let uppercase = m.toUpperCase(); 

// console.log(lowercase);  // Output: a new java book
// console.log(uppercase);  // Output: A NEW JAVA BOOK

// ========================================================================================================================================================================

// 10. write a JAVASCRIPT program for array reverse.

// let Array = [1, 2, 3, 4, 5];
// Array.reverse();
// console.log("Reversed Array:", Array);

// output:-
// Reversed Array: [ 5, 4, 3, 2, 1 ]
// =================================================================================================================================================================

// 7.
// let ascDec=[23,20,17,12,5,0,1,5,12,19,20]
// console.log(ascDec);

// let sum=ascDec.sort((a,b)=>{
//     return a-b;
// })
// console.log(sum);

// output:-
// [
//     23, 20, 17, 12,  5,
//      0,  1,  5, 12, 19,
//     20
//   ]
//   [
//      0,  1,  5,  5, 12,
//     12, 17, 19, 20, 20,
//     23
//   ]


// ===========================================================================================================================================================================================

// 11.write a JAVASCRIPT program to check if a value is found or not?

// function checkValue(arr, value) {
//     return arr.includes(value) ? 'Value found' : 'Value not found';
// }

 // Example usage
// const myArray = [1, 2, 3, 4, 5];
// const result = checkValue(myArray, 4); // Output: Value found
// console.log(result);

// ===============================================================================================================================================================================

// 12.

// var data="helloo"
// let print=data.length
// console.log(print);

// output:
// 6

// ============================================================================================================================================================================

// 13.

// let catDog = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let newSentence = catDog.replace("dog", "cat").replace("dog", "cat").replace("dog", "cat");
// console.log(newSentence);

// output:-
// I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning

// =======================================================================================================================================================================
// 14.

// let input="hire the top 1% freelance developers";
// let word =input.split(" ");
// console.log(word);

// let array=word.slice(0,4)
// console.log(array);

// output:-
// [ 'hire', 'the', 'top', '1%', 'freelance', 'developers' ]
// [ 'hire', 'the', 'top', '1%' ]

// =========================================================================================================================================================================

// 5.
// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
// let positiveNumbers = numbers.filter(function(num) {
//     return num >= 0;  
// });
// console.log("Positive Numbers:", positiveNumbers);

// output:-
// Positive Numbers: [ 0, 1, 5, 12, 19, 20 ]

// =========================================================================================================================================================================
// 15.
// let input=['5',32,'Daniel']
// let arr=input.toString()
// console.log(arr);

// output:-
// 5,32,Daniel