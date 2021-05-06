function onClick() {
    var currentYear = new Date().getFullYear()
    var carYear = +document.getElementById('car-year').value
    var carAge = currentYear - carYear
    var result = ''

    if (!carYear) {
        result = 'Car year cannot be null'
    } else if (carYear > currentYear) {
        result = 'Car year cannot be more than current year'
    } else if (carYear === currentYear) {
        result = 'Car was produced in this year'
    } else if (carAge < 5) {
        result = 'Car age: ' + carAge + '. Car age is less than 5 years'
    } else if (carAge <= 10) {
        result = 'Car age: ' + carAge + '. Car age is between 5 and 10'
    } else {
        result = 'Car age: ' + carAge + '. This is old car'
    }
    
    document.getElementById('result').innerHTML = result
}
