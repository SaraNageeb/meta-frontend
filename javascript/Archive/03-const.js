// A const variable cannot be reassigned

const secretNumber = 23;
secretNumber = 21; // Uncaught TypeError: Assignment to constant variable.


// You can create a const object:
const car = {
  type:"Fiat", 
  model:"500", 
  color:"white"
};

// You can change a property:
car.color = "red";

// You can add a property:
car.price = 3000;

console.log(car); // { color: "red", model: "500", price: 3000, type: "Fiat"}


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi"); // ["Toyota", "Volvo", "BMW", "Audi"]
