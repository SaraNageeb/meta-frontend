// This creates a request obj 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4) {
        console.log(request, request.responseText);
    }
});

// telling the request type and where to get the data from
// https://pokeapi.co/api/v2/pokemon
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// sending the request
request.send();