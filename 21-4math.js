// // Math.pow 
// const result = Math.pow(3, 8);
// console.log(result);

// // Math.abs (absolute)

// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2);
// //console.log(gap);
// if (gap < 5) {
//     console.log('You guys can be friend');
// }
// else {
//     console.log('You guys stay apart');
// }

// // Math.round
// const number = 2.5598;
// const fullNumber = Math.round(number);
// console.log(fullNumber);

// // Math.ceil & Math.floor
// const result2 = Math.ceil(2.00001);
// const result3 = Math.floor(2.980001);
// console.log(result2);
// console.log(result3);

// Math.random

//console.log(Math.random);
//const random = Math.random() * 100;

//const random = Math.round(Math.random() * 100);
//console.log(random);

for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}