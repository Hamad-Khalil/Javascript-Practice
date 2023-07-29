// // class person{
// //     constructor(){
// //         this.name="Hamad" 
// //         this.age=20
// //     }
// // }
// // let perObj= new person()
// // console.log(perObj);

// class stu{
//     constructor(name, age){
//         this.UserName= name;
//         this.userAge= age;
//     }
//     About(){
//         console.log(`${this.UserName} is ${ this.userAge} years old`);
//     }
//     static Nationality(){
//         console.log(UserName);
//         console.log(userAge);
//     }
// }
// let stuAbout= new stu("Hamad", 20)
// stuAbout.About()
// stu.Nationality()


// class person{
//     constructor(Nam, umer){
//         this.name= Nam
//         this.age= umer;
//     }
//     about(){
//         console.log(this.name,"is", this.age,'years old');
//     }
//     static Religon(){
//         console.log(name);
//         console.log(age);
//     }

// }
// let perObj=new person('Hamad', 20)
// perObj.about()


// class person{
//     constructor(naam, umer){
//         this.name= naam;
//         this.age=umer;
//     }
//     about(){
//         console.log( this.name, 'is', this.age, 'old');
//     }
// }
// let perObj= new person('Hamad', 20)
// perObj.about()
// class morning{
//     constructor(Name){
//         greet()
//             console.log('Good Morning', this.Name);

//     }
// }
// let givenName= new morning('Have a nice day')
// givenName.greet()

// class Professor {

//     teaches;

//     constructor(name, teaches) {
//       this.name= name;
//       this.teaches = teaches;
//     }

//     introduceSelf() {
//       console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
//     }


//   }
//   const walsh = new Professor('Hamad', 'Math');
// walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'


// class findArea{
//     Area;
//     constructor(sidelength){
//         this.totallength= sidelength;
//     }
//     calArea(){
//         console.log(this.totallength * 4);
//     }
// }
// let area= new findArea(2)
// area.calArea()

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }
// }
// class cat extends Animal {
//     constructor(name, height,color, noOfLegs, age) {
//         super(name)
//         this.noOfLegs = noOfLegs;
//         this.color= color
//         this.height = height;
//         this.age= age;
//     }
//     about() {
//         console.log(`This ${this.name} is ${this.age} years old, has ${this.noOfLegs} legs with ${this.color} color`);
//     }
// }
// ``
// class dog extends Animal{
//     constructor(name, height,color, noOfLegs, age){
//         super(name)
//         this.noOfLegs= noOfLegs;
//         this.age= age;
//         this.color= color;
//         this.height= height;
//     }
//     about(){
//         console.log(`This ${ this.name} is ${this.age} years old, has ${ this.noOfLegs}, legs with ${this.color} color`);
//     }
// }
// class cow extends Animal{
//     constructor( name, height, color, noOfLegs, age ){
//         super(name)
//         this.noOfLegs=noOfLegs;
//         this.height= height;
//         this.color= color;
//         this.age= age;
//     }
//     about(){
//         console.log(`This ${this.name} is ${this.age} years old and has height of ${this.height} with ${ this.color} color and ${ this.noOfLegs} leg`);
//     }
// }

// let animalsDet = new Animal()
// let animalsDet1 = new cat('Cat',' 2 Ft','white',4, 1 )
// let animalsDet2= new dog ('Dog','3 Ft','Black',4, 2)
// let animalsDet3= new cow('Cow','4 Ft','Black',4, 3)
// animalsDet1.about()
// animalsDet2.about()
// animalsDet3.about()


// class stuName{
//     constructor(name){
//         this.name= name;
//     }
// }
// class result extends stuName{
//     constructor(name,oMarks, tMarks){
//         super(name)
//         this.tMarks= tMarks;
//         this.oMarks= oMarks;
//     }
//     calculations(){
//         let res= (this.oMarks/this.tMarks)*100
//         console.log(`${this.name} got ${res} % marks`);
//     }
// }

// let giveRes=new result("Ali",50,100)
// giveRes.calculations()


// class shape{
//     constructor(sideLen,){
//         this.sideLen=sideLen;
//     }
// }
// class squ extends shape{
//     constructor( sideLen){
//         super(sideLen)
//     }
//     findPeri(){
//         let calPeri= this.sideLen * 4
//         console.log(calPeri);
//     }
// }

// class triangle extends shape{
//     constructor( sideLen){
//         super(sideLen)
//     }
//     findPeri(){
//         let calPeri= this.sideLen *3
//         console.log(calPeri);
//     }
// }
// let shapeSq= new squ (2)
// shapeSq.findPeri()    // perimeter of the sq is 8
// let shapeRec= new triangle (4)
// shapeRec.findPeri() // perimeter of the triangle is 12.


let a=document.getElementById("btn")
a.onclick= " solid red"


