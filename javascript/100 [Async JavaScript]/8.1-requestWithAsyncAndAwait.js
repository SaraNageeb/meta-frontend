// async & await

const getPokemons = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

    if(response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();

    return data;
};


console.log(1);
console.log(2);
console.log(3);

getPokemons()
.then(data => console.log('resolved: ',  data))
.catch(err => console.log('rejected: ', err.message));

console.log(4);
console.log(5);
