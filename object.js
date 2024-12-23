// Object :- Collection of Multiple datatype.(Physical Entity)
/*
    Syntax :-

    let a = {
        Key : Value,
    }
*/

// let person = {};
// let person = new Object();
// console.log(person);

let data = {
    name: "metha",
    age: 20,
    email: "marvaniyametha07@.in",
    gender: "female",
}

// 1. Dot Operator :-
/*
    Syntax :-

    object.propertyName
    console.log(data.name);
    console.log(data.age);
*/

// 2. Bracket notation :-
/*
    Syntax :-

    object[expression]
    console.log(data['name']);
    console.log(data['age']);
*/

// 1.Add Some New Property And His Value. 2.Replace Value 3.Delete Property.
/*
    1.data.address = "motavarracha, Surat, Gujarat"
    2.data.age = 20
    3.delete data.age
*/

// Object Method :-

// 1. The hasOwnProperty() method of Object instances returns a boolean indicating whether
// this object has the specified property as its own property (as opposed to inheriting it).
/*
    hasOwnProperty(prop)
    console.log(data.hasOwnProperty("name")); // true
*/

// 2. The Object.keys() static method returns an array of a given object's own enumerable
// string-keyed property names.
/*
    Object.keys(obj)
    console.log(Object.keys(data));
*/

// 3. The Object.values() static method returns an array of a given object's own enumerable 
// string-keyed property values.
/*
    Object.values(obj)
    console.log(Object.values(data));
*/

// -> 1.Object With Array, 2.Looping, 3.Accecss In Array and Object Make Quotes.
// 1.Object With Array :-
let obj = {
    name: "metha",
    hobby: ['reading', 'music', 'cooking'],
    address: {
        line1: "YogiChowk",
        line2: "Canal Road",
        city: "Surat",
        zeepcode: "394101",
    }
}
// console.log(obj);
// console.log(obj.hobby[2]);
// console.log(obj.address.city);
// console.log(obj['hobby'][2]);
// console.log(obj['address']['city']);

// 2.Looping = Two Type Of Loop :- 

// let data = [11, 22, 33, 44, 55]

// (i) For in  [object/array]
for(let i in data){
    console.log("For in Method :",i, data[i]);
}

// (ii) For of  [array]
for(let i in data){
    console.log("For of Method :",i, data[i]);
}

// 3.Accecss In Array and Object Make Quotes.
let ele = [
    { id: 1, name: "John" },
    { id: 2, name: "Jolly" },
    { id: 3, name: "Smith" },
]
// console.log(ele);
// console.log(ele[1]['name']);

let colorName = [
    { id: 1, name: "Red" },
    { id: 2, name: "Voilet" },
    { id: 3, name: "Purple" },
    { id: 4, name: "orange" },
    { id: 5, name: "pink" },
    { id: 6, name: "green" },
    { id: 7, name: "brown" },
    { id: 8, name: "black" },
    { id: 9, name: "white" },
    { id: 10, name: "blue" },
    { id: 11, name: "yellow" },
]

function generatenumber() {
    let randomIndex = Math.floor(Math.random() * colorName.length);
    let randomPlayer = colorName[randomIndex];

    document.getElementById('name').innerHTML = randomPlayer.name;
    document.getElementById('num').innerHTML = randomPlayer.id;
    console.log(randomPlayer)
}
