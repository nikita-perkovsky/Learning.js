var john = {
    name: 'John',
    birthdayYear: 1986
}

var mary = {
    name: 'Mary',
    birthdayYear: 2006
}

var tom = {
    name: 'Tom',
    birthdayYear: 2015
}

function calculateAge(year) {
    var currentYear = new Date().getFullYear()
    return currentYear - year
}

function printUserAge(obj) {
    var age = calculateAge(obj.birthdayYear)
    if(age < 12) {
        console.log(obj.name + ' has age: ' + age + '. This is a child')
    } else if(age > 12 && age < 18) {
        console.log(obj.name + ' has age: ' + age + '. This is a teenager')
    } else {
        console.log(obj.name + ' has age: ' + age + '. This is an adult')
    }
}

printUserAge(john)
printUserAge(mary)
printUserAge(tom)