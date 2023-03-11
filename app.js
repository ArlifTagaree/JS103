//String
console.log('Hello World!');

let email = 'donovanlak@gmail.com'
console.log(email);

let myAge = 30;

//string concatenation
let firstName = 'Lak';
let lastName = 'Donovan';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let info = `My name is ${fullName}`;
console.log(info);

//getting character
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods - this method will not change the original variable length
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(fullName);

//find index in the string
let index = email.indexOf('@'); //find the index of @ in email
console.log(index);

//find the last index of the last letter defind
let findLastIndex = email.lastIndexOf('o'); //
console.log(findLastIndex);

//slice the string (from,to)
let slice = email.slice(3,10);
console.log(slice);

let raduis = 10;
const pi = 3.14; // pi never changes so we use const.

console.log(raduis,pi);

//math operator +,-,*,/,**,%
console.log(10/2);

let resul = raduis % 3; //this will get the remain
console.log(resul);

let circleArea = pi*raduis**2;
console.log(circleArea);

//the order of the operations - B I D M A S
let bidMas = 5 * (10-3)**2;
console.log(bidMas);

//true or false (0,1)

// Boolean(10 > 9) //true
// let  isApproved = false;

//boolean & comparison


//methods can return booleans
let eMail = 'donovanlak@gmail.com';
let findLetter = email.includes('@'); //this check if the string include @ if yes will return true
console.log(findLetter);

let selectedFruits = ['Apple', 'Banana', 'Orange'];
let findFruits = selectedFruits.includes('Banana'); //this check if the string include
console.log(findFruits);

//comparison operators
// let age = 25;
// console.log(age ==25);
// console.log(age !=25);
// console.log(age >20);
// console.log(age <21);
// console.log(age <=25);
// console.log(age >=25);

let firstname = 'lak';
console.log(firstname=='Lak');
console.log(firstname=='lAk');//this is not the same above because it case sensitive
console.log(firstname > 'Jack'); // alphabet order
console.log(firstname > 'lak'); // lower case > upper case
console.log(firstname > 'Jack'); // lower case still >

//loose comparison (different types can still be equal)
// let age = 25;
// console.log(age == 25);
// console.log(age == '25');//this will get true because JavaScript will convert string to number automatically

//strict comparison (different types can't be equal)
let age = 25;
console.log(age === 25);
console.log(age === '25');//this will get false becasue check the type aswell

//Array

//example 1
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits)

// //example 2
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits[0]);

//example 3
//JavaScript is Dynamic -  Array can change (length) ADD

// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [3] = 'Pineapple';
// console.log(selectedFruits);

//example 4
//JavaScript is Dynamic -  Array can change - Data Type
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [3] = 'Pineapple';
// selectedFruits [4] = 5;
// console.log(selectedFruits);


//example 5 it can be replaced
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [1] = 'Pear';
// concatenate(selectedFruits);

//example 6 length of the array
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits.length);

//array methods
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let join = selectedFruits.join(','); // Apple,Banana,Orange
// console.log(join);

//get index of
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let fruitIndex = selectedFruits.indexOf('Banana');
// console.log(fruitIndex);

//concatenate (join 2 arrays together)
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let concatFruits = selectedFruits.concat(['Strawberry', 'Grape']);
// console.log(concatFruits);

//push add new values into the array at the end
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let pushFruits = selectedFruits.push('Raspberry');
// console.log(selectedFruits);

//pop removes the value from the end of the array
let selectedfruits = ['Apple', 'Banana', 'Orange'];
let popFruits = selectedfruits.pop();
console.log(selectedFruits);// this it will get the whole array
console.log(popFruits); //only the one that we pop out

//Object

// let person = {
//     firstName: 'Jack',
//     lastName: 'Jones',
//     age: 25
// }
// console.log(person);


// let car = {
//     make: "Benz",
//     model: "E220",
//     year: 2000
// }
// console.log(car);



//object literals
// let user = {
//     firstName: 'Lak',
//     lastName: 'Donovan',
//     email: 'donovan@gmail.com',
//     age: 26,
//     location: 'UK',
//     readingList:['HTML', 'CSS', 'JavaScript'],
//     
//     }
// };
// console.log(user);
// console.log(user.firstName); //access

// user.age = 50;
// console.log(user.age); //update the value