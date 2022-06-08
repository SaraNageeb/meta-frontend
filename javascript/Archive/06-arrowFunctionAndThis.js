// Regular function with this keyword
const cars = {
    model: 'Audi',
    price: 5000,
    description: function () {
        return `The model and price of this car: ${this.model} - ${this.price}`
    }
};

console.log(cars.description()); // "The model and price of this car: Audi - 5000"


// Arrow function with this keyword
const player = {
  name: 'Cristiano Ronaldo',
  worldCupPlayed: [2006, 2010, 2014, 2018, 2022],
  showWCP() {
    this.worldCupPlayed.forEach((worldCup) => {
      console.log(this.name + " played at World Cup " + worldCup);
    });  
  }
};

player.showWCP();
/*
"Cristiano Ronaldo played at World Cup 2006"
"Cristiano Ronaldo played at World Cup 2010"
"Cristiano Ronaldo played at World Cup 2014"
"Cristiano Ronaldo played at World Cup 2018"
"Cristiano Ronaldo played at World Cup 2022"
*/
