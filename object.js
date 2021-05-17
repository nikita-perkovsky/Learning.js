var game = {
    currentLevel: 1,
    countLevels: 21,
    name: 'Need for Speed',
    characters: ['Nick', 'John', 'Mery'],
    cars: [
        honda = {
            name: 'Honda',
            country: 'Japan',
            year: 1991
        },
        bmw = {
            name: 'BMW',
            country: 'Germany',
            year: 2000
        },
        ferrari = {
            name: 'Ferrari',
            country: 'Italy',
            year: 1998
        }
    ],

    setLevel: function (level) {
      this.currentLevel = level  
    },

    getGameStatus: function () {
        console.log('The current status is ' + this.currentLevel)
    }
}

console.log(game)
game.setLevel(4)
console.log(game)
console.log(game.name)
game.getGameStatus()
console.log(game.cars)
console.log(game.characters)
console.log(game.cars[2])
game.cars[1].year = 2021