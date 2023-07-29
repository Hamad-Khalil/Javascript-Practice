// // This is the example that how callBack function work

// function Remarks(grade){

//     if ( grade=='A+'){
//         console.log('your grade is',grade,', Excellent!');
//     }
//     else if ( grade=='A'){
//         console.log('your grade is',grade,', very Good');
//     }
//     else if ( grade=='B'){
//         console.log('your grade is',grade,', Fair');
//     }
//      else if ( grade== 'C'){
//         console.log('your grade is',grade,', Improve it');
//     }
//     else if ( grade== 'D'){
//         console.log('your grade is',grade,', Bad');
//     }
//      else if ( grade== 'E'){
//         console.log('your grade is',grade,', Very Bad!');
//     }
//     else if( grade== 'F') 
//     (console.log('You are Fail !!!'))
// }

// function getGrade(score, callback){
//     let grade;
//     if( score>= 90){
//         grade="A+"
//     } else if( score>= 80){
//         grade= "A"
//     }
//     else if( score>= 70){
//         grade= "B"
//     }
//     else if( score>= 60){
//         grade= "C"
//     }
//     else if( score>= 50){
//         grade= "D"
//     }
//     else if( score>= 40){
//         grade= "E"
//     }
//     else if( score <= 40){
//         grade= "F"
//     }
//     callback(grade)
// }
// getGrade(61, Remarks);

// setInterval(encourage, 100);
// function encourage() {
//  console.log("You're doing great, keep going!");
// }


// function greetings(fullName){
//     console.log("Hello " + fullName + ", Have a nice day");
// }
// function fullName(nameStr, callBack){
//     console.log(nameStr.split());
//     callBack(fullName)
// }
// greetings("Hamad")

// let promise = new Promise(function (resolve, reject) {
// // do something that might take a while
//     // let's just set x instead for this example 
//     let x = 20;
//     if (x > 10) {
//     resolve(x); // on success
//     } else {
//     reject("Too low"); // on error
//     }
//    });
//    promise.then(
//     function (value) {
//     console.log("Success:", value);
//     },
//     function (error) {
//     console.log("Error:", error);
//     })

// let promise= new Promise( function (resolved, reject){
//     let x= 0;
//     if ( x > 10){
//         resolved(x)
//     } else if(  x < 10){
//         reject('Too low')
//     }
// });
// promise.then(
//     function (value){
//         console.log("ok", value);
//     },
//     function (error){
//         console.log("failed", error);
//     }
// )


// let promise= new Promise((resolve, reject)=> {
//     resolve ('Done');
// })
// .then(value => {
//     console.log("This");
// })
// .then(value => {
//     console.log("is");
// })
// .then(value => {
//     console.log("how");
// })
// .then(value => {
//     console.log("then");
// })
// .then(value => {
//     console.log("works");
// })
// .catch(error =>{
//     console.log("This is how catch works");
// })

// let promise= new Promise ((resolve)=>{
//     resolve("Starts counting")
// })

// function counter(value){
//     console.log(value);
// }
// promise.then((val)=>{
//     counter(val);
//     return 1
// })
// .then((val)=>{
//     counter(val);
//     return 2
// })
// .then((val)=>{
//     counter(val);
//     return 3
// })
// .then((val)=>{
//     counter(val);
//     return 4
// })

// function saySomething(x)


// async function talk(x){
//     let word= await saySomething(x)
//     console.log(word);
// }
// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }, 1000);

// console.log('I am a synchronous message');

// let counter=0
// let timer= setInterval(function (){
//     console.log("asynchronus message", counter);
//     counter +=  1
//     if( counter>=50){
//         clearInterval(timer)
//     }
// },1000)

// function job (callback1,callback2){
//     setTimeout(()=>{
//         callback1();
//     },1000)
//     let counter=0
//     let cb= setInterval(()=>{
//         callback2();
//     },2000,
//     counter++)
//     if(counter>=3){
//         clearInterval(cb)
//     }
// }
// job(1,2)

// function job1(callback) {
//     setTimeout(function() {
//         callback('test 1');
//     }, 2000);
// }

// function job2(callback) {
//     setTimeout(function() {
//         callback('test 2');
//     }, 4000);
// }

// job1(function(data) {
//     console.log(data);

//     job2(function(data) {
//         console.log(data);
//     });
// });


// let pro = new Promise(function (reslove, reject) {
//     setTimeout(function(){
//         reslove('it is resolve'), 1000
//     })
// })
// pro.then(function (value) {
//     console.log(value);
// })

// let pro= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Hello World'), 2000
//     })
// })
// pro.then(function(value){
//     console.log(value + 1);
// })
// pro.then(function(value){
//     console.log(value + 2);
// })
// pro.then(function(value){
//     console.log(value + 3);
// })
// pro.then(function(value){
//     console.log(value + 4);
// })

// let pro= new Promise(function( resolve, reject){
//     setTimeout( function(){
//         reject(' it is reject'), 2000
//     })
// })
// pro.then(function(data){
//     console.log(data= ' 1');
// })

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });
// promise.then(function success(data) {
//     console.log(data);
// });

// let pro= new Promise(function( resolve, reject){
//     setTimeout(function(){
//         resolve("it is resolve 1");
//         resolve("it is resolve 2");
//         resolve("it is resolve 3");
//         resolve("it is resolve 4");
//     }, 2000);
// })
// pro.then(function success(data){
//     console.log(data);
// });

    // let job= new Promise(function(resolve, reject){
    //     setTimeout (function(){
    //         resolve('hello world');
    //     },2000);
    // })
    // job.then(function ( data){
    //     console.log(data);
    // })
    // module.exports = job;

    function job() {
        return new Promise(function(resolve, reject) {
            reject();
        });
    }
    
    let promise = job();
    
    promise
    
    .then(function() {
        console.log('Success 1');
    })
    
    .then(function() {
        console.log('Success 2');
    })
    
    .then(function() {
        console.log('Success 3');
    })
    
    .catch(function() {
        console.log('Error 1');
    })
    
    // .then(function() {
    //     console.log('Success 4');
    // });





