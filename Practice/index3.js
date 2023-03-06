

let products= [
  {  mobile: "Samsung" , Price:2000},
  {Laptop: "Dell" , Price: 3000},
  {Bike:"Honda", Price: 3000}
]
let totalPrice= products.reduce((a,b) => a+ b.Price)
console.log(totalPrice);

// To find even numbers
// let evenNum= array.filter(item => item % 2 === 0)
// console.log(evenNum);


// let array=[ 1,2,3,4,5]

// array.unshift(0)
// console.log(array);

// array.shift()
// console.log(array);

// array.pop()
// console.log(array);

// array.push(6)
// console.log(array);