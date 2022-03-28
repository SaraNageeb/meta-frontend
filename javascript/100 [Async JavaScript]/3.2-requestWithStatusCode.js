// This creates a request obj 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)

    // if the request is done and the status is sucessfull 
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    // if not display an error msg   
    } else if(request.readyState === 4) {
        console.log('Could not fetch the data');
    }
});

// telling the request type and where to get the data from
// https://pokeapi.co/api/v2/pokemon
request.open('GET', 'https://pokeapi.co/api/v2/pokemon');

// sending the request
request.send();