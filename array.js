var numbers = [1, 3, 56, 45, 78, 53, 2]

console.log(numbers)
console.log(numbers.length)
console.log(numbers.indexOf(56))
console.log(numbers[5])

numbers[1] = 100
console.log(numbers)

numbers.push(77)
console.log(numbers)

numbers.sort(function (a, b) { return a - b })
console.log(numbers)