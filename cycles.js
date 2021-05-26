// for
var numbers = [1, 2, 56, 78, 94, 45]
var result1 = ''
for (let i = 0; i < numbers.length; i++) {
    result1 += numbers[i] + ', '
}
console.log(result1)

// forEach
var names = ['Nick', 'July', 'Kody']
var result2 = ''
names.forEach(name => {
    result2 += name + ', '
});
console.log(result2)

// while
var cars = [
    { mark: 'Ford', year: 1989 },
    { mark: 'BMW', year: 2008 },
    { mark: 'Mercedes', year: 1999 },
    { mark: 'Volvo', year: 2009 }
]
var i = 0
while (i < cars.length) {
    console.log(cars[i++])
}