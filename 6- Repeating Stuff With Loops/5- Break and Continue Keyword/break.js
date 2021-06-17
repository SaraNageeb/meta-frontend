// break: stops the loop immediately 

let carros = ["BMW", "Volvo", "Saab", "Ford"];

list: {
    console.log(carros[0]);
    console.log(carros[1]);
    break list;
    console.log(carros[2]);
    console.log(carros[3]);
}