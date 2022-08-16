// Biến, cách khai báo biến
var b = 2
const PI = 3.14
let age = 12

/**
 * @hoisting
 */

// Các kiểu dữ liệu
/**
 * @Primitive {Number, String, Boolean, Null, Undefined, Symbol}
 */
let msg = 'Day la kieu du lieu String'
let msg1 = "Day la kieu du lieu String"
let msg2 = `Day la kieu du lieu String`
let isTaller = true
let canJump = false
console.log(msg / 2)
console.log(2 / 0)

/**
 * @Reference : Tham chiếu {Object, Array}
 */
let arr = ['apple', 'grape', 'banana', 10, true]
let obj = {
    // key : value
    name: 'ABCD',
    price: 100,

};

// Vòng lặp, câu lệnh rẽ nhánh, hàm

// for(let i = 0; i < 100; ++i){
//     console.log(i)
// }

for (let i = 0; i < arr.length; ++i) {
    console.log('Arr o vi tri thu ', i, ':', arr[i])
}

for (let x of arr) {
    console.log(x)
}

/**
 * @If_esle_statement
 */

// let age1 = prompt('Nhap tuoi cua ban: ')
// if (age1 < 18) {
//     console.log('Di hoc di')
// } else {
//     console.log('Di choi di')
// }

/**
 * @Syntax
 * if(condition){}
 * if(condition){} else {}
 * if(condition){} else if(condition){} else {}
 */

/**
 * @Function
 */

function sum(a, b) {
    return a + b
}

console.log(sum(100, 200))

function checkEvent(a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(checkEvent(101));

function greeting() {
    console.log('Hello')
}
greeting()

// const myDiv = document.querySelector('.my-div')
