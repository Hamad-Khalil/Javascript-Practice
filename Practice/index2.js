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
let maxNum= 100;

// 2. Generate a random number for the solution using Math.random() and
// Math.floor() . You will also need to add 1 so that the value is
// returned as 1-[whatever the set max value is]. You can log this value to
// the console for development to see the value as you create the game,
// then when the game is complete you can comment out this console
// output.
let ranNum=Math.random() + 1 
console.log(ranNum);
// 3. Create a variable that will be used for tracking whether the answer is
// correct or not and set it to a default Boolean value of false . We can
// update it to be true if the user guess is a match.

let guess= true;
// 4. Use a while loop to iterate a prompt that asks the user to enter a
// number between 1 and 5, and convert the response into a number in
// order to match the data type of the random number.
let promp=prompt('Write any number between 1 and 5')
let prompValue=Number(promp)
// 5. Inside the while loop, check using a condition to see if the prompt
// value is equal to the solution number. Apply logic such that if the
// number is correct, you set the status to true and break out of the loop.
// Provide the player with some feedback as to whether the guess was
// high or low, and initiate another prompt until the user guesses
// correctly. In this way we use the loop to keep asking until the solution
// is correct, and at that point we can stop the iteration of the block of
// code.

