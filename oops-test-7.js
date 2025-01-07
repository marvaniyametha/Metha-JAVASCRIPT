
// 3}.
// class Employee {
//     constructor() {
//         console.log("hey this is a new employee.");
//     }
// }

// const Employeeee = new Employee();

// output  :-
// hey this is a new employee.

// ==================================================================================================================================================================================================
// 4}.

// class Shape {
//     rectangle(w, h) {
//         return w * h;
//     }
//     circle(r) {
//         return 3.14 * r * r;
//     }
// }

// const shape = new Shape();
// console.log("Rectangle Area:", shape.rectangle(2, 2));
// console.log("Circle Area:", shape.circle(5));

// output:-

// Rectangle Area: 4
// Circle Area: 78.5


// ==========================================================================================================================================================================
// 1}.


// class School {
//     student(name, email, contact) {
//         console.log("Student Name: " + name);
//         console.log("Student Email: " + email);
//         console.log("Student Contact: " + contact);
//     }

//     faculty(name, email, contact) {
//         console.log("Faculty Name: " + name);
//         console.log("Faculty Email: " + email);
//         console.log("Faculty Contact: " + contact);
//     }
// }


// let school = new School();

// school.student("metha marvaniya", "methamarvaniya@gmail.com", "123-456-7890");

// school.faculty("girish sir ", "dr.rnw@multimedia.com", "987-654-3210");

// output:-

// Student Name: metha marvaniya
// Student Email: methamarvaniya@gmail.com
// Student Contact: +91 123-456-7890
// Faculty Name: girish sir 
// Faculty Email: dr.rnw@multimedia.com
// Faculty Contact: +91 987-654-3210

// ====================================================================================================================================================================================

// 2}.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age, job) {
//       super(name, age);
//       this.job = job; 
//     }
  
//     print() {
//       console.log("Name:", this.name);
//       console.log("Age:", this.age);
//       console.log("Job:", this.job);
//     }
//   }
  
 
//   let employee = new Employee("Metha", 20, "Nail Artist");
//   employee.print();

//   output:-

// Name: Metha
// Age: 20
// Job: Nail Artist