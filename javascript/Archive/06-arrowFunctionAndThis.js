const cars = {
    model: 'Audi',
    price: 5000,
    description: function () {
        return `The model and price of this car: ${this.model} - ${this.price}`
    }
};

console.log(cars.description());
