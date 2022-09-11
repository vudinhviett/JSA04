let students = [
    {
        name: 'A',
        age: 16,
        address: 'Bac Tu Liem'
    },
    {
        name: 'B',
        age: 17,
        address: 'Nam Tu Liem'
    },
    {
        name: 'C',
        age: 18,
        address: 'Ha Dong'
    }
]
function student() {
    console.log('Bai 1')
    for (let x of students) {
        console.log(`
        Ten: ${x.name}
        Age: ${x.age}
        Address: ${x.address}`)
    }
}
student()


var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

function phone() {
    console.log('Bai 2')
    for (let x of smartPhones) {
        console.log(`
        Name: ${x.name}
        Price: ${x.price}`)
    }
}
phone()

console.log('Bai 3')
console.log(
    `
    let foo = (x,y,z) => {
        console.log( x, y, z );
    }

    let foo = () => arlet('Hello')

    let foo = (a,b) => {
            let m = a+b*100
            return m
    }
    `
)

