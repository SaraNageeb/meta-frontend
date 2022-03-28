const getPokemon = (resourceData) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)

            // if the request is done and the status is sucessfull 
            if (request.readyState === 4 && request.status === 200) {
                // JSON.Parse - converts JSON string into javascript obj
                const data = JSON.parse(request.responseText);
                resolve(data);
                // if not display an error msg   
            } else if (request.readyState === 4) {
                reject('Could not fetch the data');
            }
        });

        // telling the request type and where to get the data from
        // https://pokeapi.co/api/v2/pokemon
        request.open('GET', resourceData);

        // sending the request
        request.send();
    });
};

getPokemon('https://pokeapi.co/api/v2/pokemon')
.then(data => {console.log('promise resolve:', data);
}).catch((err) => {console.log('promise rejected:', err);
});
