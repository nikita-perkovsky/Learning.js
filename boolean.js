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
