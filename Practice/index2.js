// Loops


// While Loops

// let i=1
// while(i<=10){
//     console.log(i);
//     ++i;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jack"]
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Louiza") {
//  console.log("Found her!");
//  notFound = false;
//  } else {
//  someArray.shift();
//  }}

//  let num1=0
//  let num2=1
//  let temp;
//  let fabArr=[]
//  for(let i=0; fabArr.length<10; i++){
//     fabArr.push(num1)
//     temp= num1 + num2
//     num1= num2
//     num2= temp
//  }
// //  while(fabArr.length<10){
// //     fabArr.push(num1)
// //     temp= num1 + num2
// //     num1= num2
// //     num2= temp
// //  }
//  console.log(fabArr);

// Practice exercise 5.1
// In this exercise we will create a number guessing game that takes user input
// and replies based on how accurate the user's guess was.
// 1. Create a variable to be used as the max value for the number guessing
// game.
// let maxNum= 100;

// // 2. Generate a random number for the solution using Math.random() and
// // Math.floor() . You will also need to add 1 so that the value is
// // returned as 1-[whatever the set max value is]. You can log this value to
// // the console for development to see the value as you create the game,
// // then when the game is complete you can comment out this console
// // output.
// let ranNum=Math.random() + 1 
// console.log(ranNum);
// // 3. Create a variable that will be used for tracking whether the answer is
// // correct or not and set it to a default Boolean value of false . We can
// // update it to be true if the user guess is a match.

// let guess= true;
// // 4. Use a while loop to iterate a prompt that asks the user to enter a
// // number between 1 and 5, and convert the response into a number in
// // order to match the data type of the random number.
// let promp=prompt('Write any number between 1 and 5')
// let prompValue=Number(promp)


// Do while Loop

// let num;
// do{
//     num= prompt("Write a number between 1 and 100")
// } while(
//     !num>=1 && num<=100
// );

// Practice exercise 5.2
// In this exercise, we will create a basic counter that will increase a dynamic
// variable by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// let counter = 0
// // 2. Create a variable, step , to increase your counter by
// let step = 1;
// // 3. Add a do while loop, printing the counter to the console and
// // incrementing it by the step amount each loop
// do {
//     step += counter
// } while (
//     counter < 100
// )
// console.log(counter);

// 4. Continue to loop until the counter is equal to 100 or more than 100



// For Loop

// Practice exercise 5.3
// In this exercise we will use a for loop to create an array that holds objects.
// Starting with creating a blank array, the block of code within the loop will
// create an object that gets inserted into the array.
// 1. Setup a blank array, myWork .

// let myWork=[]

// // 2. Using a for loop, create a list of 10 objects, each of which is a
// // numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an
// // alternating true / false status for every other item to indicate whether
// // the class will be running this year. For example:
// // name: 'Lesson 1', status: true

// for(let i=1;i<10;i++){
//     let obj=`Lesson ${i} Status ${i/2==0}`
//     myWork.push(obj)
// }
// console.log(myWork);
// // 3. You can specify the status by using a ternary operator that checks
// // whether the modulo of the given lesson value is equal to zero and by
// // setting up a Boolean value to alternate the values each iteration.
// // 4. Create a lesson using a temporary object variable, containing the name
// // ( lesson with the numeric value) and predefined status (which we set
// // up in the previous step).
// // 5. Push the objects to the myWork array.
// // 6. Output the array to the console.

// let arr=[1,2,3,4,5,6,76]
// for (let ele of arr) {
//     console.log(ele);
// }

// Practice exercise 5.6
// This exercise will construct an array as it loops through the incrementing
// values of x. Once the array is done, this exercise also will demonstrate
// several ways to output array contents.
// 1. Create an empty array
// let arr=[]

// // 2. Run a loop 10 times, adding a new incrementing value to the array
// for(let i=1;i<10;i++){
// for(j=1;j<10;j++){
//     arr.pish(j)
// }
// }
// console.log(arr);
// 3. Log the array into the console


// 4. Use the for loop to iterate through the array (adjust the number of
// iterations to however many values are in your array) and output into
// the console
// 5. Use the for of loop to output the value into the console from the
// array

//Practice exercise 5.7
// In this exercise, we will experiment with looping over objects and internal
// arrays.
// 1. Create a simple object with three items in it.
// let obj={
//     stuId:423,
//     stuName:'Hamad',
//     city:'fsd'
// }

// 2. Using the for in loop, get the properties' names and values from the
// object and output them into the console.
// for (let i in obj) {
//     console.log(i, obj[i]);
// }

// 3. Create an array containing the same three items. Using either the for
// loop or the for in loop, output the values from the array into the
// console.
// let arr=[1,1,3,4,5]
// for(let ele in arr){
//     console.log(arr[ele]);
// }

// let arr=[423,'Hamad', 'fsd']
// for (ele of arr){
//     console.log(ele);
// }


// let obj={
//     stuId:423,
//     stuName:'Hamad',
//     city:'fsd'
// }
// // let arr=Object.keys(obj)
// // let arr1=Object.values(obj)

// // let arr3=Object.keys(obj)
// // for(let i=0; i<arr3.length; i++){
// //     console.log(`${arr3[i]} : ${obj[arr3[i]]}`);
// // } //stuId : 423
// // // stuName : Hamad
// // // city : fsd
// // for(let i of Object.values(obj)){
// //     console.log(i); 
// // } //423
// // // Hamad
// // // fsd
// // console.log(arr);//[ 'stuId', 'stuName', 'city' ]
// // console.log(arr1); //[ 423, 'Hamad', 'fsd' ]

// // let iArr= Object.entries(obj)
// // console.log(iArr)// [ [ 'stuId', 423 ], [ 'stuName', 'Hamad' ], [ 'city', 'fsd' ] 

// let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
//    ];

//    for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//     console.log("I have found my new car:", cars[i]);
//     break;
//     }
//     }
//  }


// function adNum(x=2, y=2){
//     console.log(x+y);
// }
// adNum(3,3)



// Function

//Arrwo functions

// let arFun=(x,y) => x+y
// console.log(arFun(2,2));

// let arFun=x => x*6
// console.log(arFun(2));

// let city=['Faisalabad', 'Lahore', 'Islamabad']
// let city2=['Peshawar','Queta','Karachi']

// console.log(...city, ...city2, 'Multan');
// function add(x,y){
//     console.log(x+y);
// }
// let arr=[1,3]
// add(...arr)

// function add(x,y){
//     return x+y;
// }
// let sum=add(2,3)
// console.log(sum);
// let x

function doingStuff() { 
    if (true) { 
    console.log(x);
    var x = "local"; 
    } 
   }
   doingStuff(); // undefined
