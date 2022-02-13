// this.table = 'window table';

// this.garage = {
//     table: 'garage table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`)
//     }

// };
// garage.cleanTable();

// let johnsRoom = {
//     table: 'johns table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`)
//     }
// };

// johnsRoom.cleanTable();

// const cleanTable = function (){
//     console.log(`cleaning ${this.table}`);
// }

// cleanTable();

// class student {
//   static count = 0; //static variable to call

//   constructor(name, age, ph_no, marks) {
//     this.name = name;
//     this.age = age;
//     this.ph_no = ph_no;
//     this.marks = marks;
//     student.countStudent();
//   }

//   static countStudent() {
//     return student.count++; //this is how u access static variable
//   }

//   eligible() {
//     if (this.marks >= 40) {
//       console.log(`${this.name} age ${this.age} is eligible`);
//     } else if (this.marks < 40) {
//       console.log(`${this.name} age ${this.age} is not eligible`);
//     }
//   }
// }

// const Nilesh = new student("Nilesh", 18, 1234, 34);
// const Virat = new student("Virat", 15, 2345, 35);
// const Rohit = new student("Rohit", 16, 4567, 60);

// console.log(student.countStudent());

// Nilesh.eligible();
// Virat.eligible();
// Rohit.eligible();

// Arrow func

let x = function(){
    this.val = 1;
    setTimeout( () => {
        this.val++;
        console.log(this.val)
    },1 )
};

let y = new x();