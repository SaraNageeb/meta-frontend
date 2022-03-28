// fetch API


fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then((response) => {
    console.log('resolved', response);
    // getting the data
    return response.json();
    // now we can actually get the data from the json method
}).then((data) => {console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});