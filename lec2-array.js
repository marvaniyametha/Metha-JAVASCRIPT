// array:-
        // store multiple values in single contanier (variable).


//   ~  High order method  
// ~   Filter   
//   ~ Find method 
//   ~ Find index
//   ~ some method 
//   ~ Every 
//   ~ Includes
//   ~ Index of
//   ~ For each 
//   ~ Map 


// 1.filter
// let data =[11,22,33,44,55];
// let arr=data.filter(function(element,index){
// return element >=30;
// });
// console.log(arr);

// output:-
// [ 33, 44, 55 ]

// 2.Find method

// let data =[11,22,33,44,55];
// let arr=data.find(function(element,index){
// return element >=30;
// });
// console.log(arr);

// output:-
// 33

// 3.find index

// let data =[11,22,33,44,55,66];
// let arr=data.findIndex(function(element,index){
// return element >=66;
// });
// console.log(arr);

// output:-
// 5

// 4.some method

// let data =[11,22,33,44,55,66];
// let arr=data.some(function(element,index){
// return element >=44;
// });
// console.log(arr);

// output:-
// true

// 5.Every

// let data =[11,22,33,44,55,66];
// let arr=data.every(function(element,index){
// return element >=44;
// });
// console.log(arr);

// output:- 
// false

//  6.Includes
// console.log(data.includes(44))
// output:-true

// 7. index of
// console.log(data.indexOf(44))
// output:-3

// 8. For each

// let data =[11,22,33,44,55,66];
// data.forEach ((elements,index) =>{
//   console.log(elements)
// })

// output:-
// 11
// 22
// 33
// 44
// 55
// 66

// 9.Map(to create new array)

// let arr=data.map((element,index) =>{
//    return element*3;
// })
// console.log(arr)

// output:-

// [ 33, 66, 99, 132, 165, 198 ]