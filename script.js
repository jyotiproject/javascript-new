//find average marks of student array
let marks= [45,45,45,45,45,45,45,45]
let sum = 0;
let avg = 0;
for(i of marks){
  console.log(i);
  sum = sum + i;
}
console.log(sum);
avg = sum/marks.length;
console.log(avg);


//looping over arrays

// let heroes =["ironman", "spiderman", "thor", "hulk"];
// for(let idx=0; idx < heroes.length; idx++){
//   console.log(heroes[idx]);
// }

//for of loop on arrays

// cities = ["delhi", "mumbai", "kolkata", "chennai"];
// for (let city of cities ){
//   console.log(city.toUpperCase());

// }

//arrays
// let marks =[11,22,3,3,444,4555,5435];
// console.log(marks.length);



//array indices

// let marks =[23,44,55,66,7754,33];
// console.log(marks);
//marks[0] = 100;
// console.log(marks);







//objects
// let obj = {
//   name:"pen",
//   color:"blue",
//   price:10
// }

// console.log("the price of  ", obj.name  , "is",  obj.price);


//string
// let str = "hello";
// console.log(str.length);

// //template literals

// let speccialString = `This is a special string with ${2 + 5 +6}`;
// console.log(speccialString);

//practice quwstion to print 0 to 100 even numbers
// let i=0;
// for(i=0;i<=100;i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }


//for-of loop to iterate over an array of strings and arrays
// let str="jyoti";

// for(let i of str){
//   console.log(i);
// }

// let a = "hello";
// let size=0;
// for(let i of a){
//   size++;
// }
// console.log("size of string is: " + size);

//for in loop to iterate over objects it returns keys of objects 
// let student ={
//   name:"jyoti",
//   age : 23,
//   course:"engineering"
// } 

// for (let value in student){
//   console.log(value + ": " + student[value]);
// }


//loops and strings

// let i = 0;
// for (i=0; i<5; i++){
//   console.log("I am a Software developer");
// }

//calculate sum of 100 numbers
/*let sum = 1;

for(i=1;i<=100;i++){
  sum = sum+i;
  console.log(i);
}

console.log("sum of 100 numbers is: " + sum);*/

//while loop
// let i=1;
// while(i<=5){
//   console.log(i);
//   i++;
// }
//  console.log(i);
//   i++;
 //do while loop

//do while loop
// let i =1;
// do{
//   console.log(i);
//   i++;
// }
// while(i<=5);







//conditional statements
// let a = prompt("Enter score (0-100):");

// if (a >=90 && a <=100){
//     console.log("Grade A");
// }
// else if (a >=80 && a<=90){
//     console.log("Grade B");
// }
// else if (a >=70 && a<=80){
//     console.log("Grade C");
// }
// else if (a >=60 && a<=70){
//     console.log("Grade D");
// }

// console.log("Your score is: " + a);