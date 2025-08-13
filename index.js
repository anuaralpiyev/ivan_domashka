import {DateTime} from "luxon";

const now = DateTime.now();
const second = now.plus({
    hour: 12
})

console.log(now);
console.log(now.diff(second));
console.log(now.daysInMonth);




// const pew = new Promise((res) => {
//     console.log('123');
//     setTimeout(() => {
//         res('Perfect...!');
//     }, 2000)
// })
//
//
// console.log(465);
// console.log(true);
//
//
// // pew.then((result) => console.log(result));
//
//
// async function print() {
//     const  result = await pew;
//     console.log(result);
// }
//
// print();

