console.log('5 > 2', 5 > 2)         // true
console.log('5 < 2', 5 < 2)         // false
console.log('5 >= 2', 5 >= 2)       // true
console.log('5 <= 2', 5 <= 2)       // false
console.log('5 == 5', 5 == 5)       // true
console.log('5 === 5', 5 === 5)     // true
console.log('5 == "5"', 5 == "5")   // true
console.log('5 === "5', 5 === "5")  // false
console.log('5 != 5', 5 != 5)       // false
console.log('5 !== 6', 5 !== 6)     // true
console.log('5 !== "6"', 5 !== "6") // true
console.log('5 !== 5', 5 !== 5)     // false
console.log('5 !== "5"', 5 !== "5") // true

console.log(true && true)   // true
console.log(true && false)  // false
console.log(false && true)  // false
console.log(false && false) // false
console.log(true || true)   // true
console.log(true && false)  // true
console.log(false && true)  // true
console.log(false && false) // false
console.log(!true)          // false
console.log(!false)         // true

// 0
if (0) {
    console.log('Result: true')
} else {
    console.log('Result: false')
}

// NaN
if (NaN) {
    console.log('Result: true')
} else {
    console.log('Result: false')
}

// null
if (null) {
    console.log('Result: true')
} else {
    console.log('Result: false')
}

// undefined
if (undefined) {
    console.log('Result: true')
} else {
    console.log('Result: false')
}

// ''
if ('') {
    console.log('Result: true')
} else {
    console.log('Result: false')
}

var hasPermission = true
var message = hasPermission ? 'Access allowed' : 'Access denided'
console.log(message)

var color = 'Green'
switch (color) {
    case 'red':
        console.log('Color is red')
        break;
    case 'yellow':
        console.log('Color is yellow')
        break;
    case 'Green':
    case 'GREEN':
    case 'green':
        console.log('Color is green')
        break;
    default:
        console.log('Unknown color')
        break;
}