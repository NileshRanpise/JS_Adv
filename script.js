// let obj = {num:2};

// let myFync = function(arg1,arg2,arg3){
//     console.log(this.num + arg1 + arg2 +arg3);
// }

// myFync.call(obj,1,2,3);

// console.log(myFync.call(obj,1,2,3));


// arr = [1,2,3];
// myFync.apply(obj,arr);

// let student = {age:20}
// let studentAge = function(){
//     console.log(this.age);
// }
// let bound = studentAge.bind(student);

// bound();


// Curring

let multiply = function(x,y){
    console.log(x*y);
}

let multiplybyTwo = multiply.bind(this,2);
multiplybyTwo(5);

let multiplybyFive = multiply.bind(this,5);
multiplybyFive(10);
