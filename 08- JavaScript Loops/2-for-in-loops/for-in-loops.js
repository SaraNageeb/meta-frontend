const hero = {
    id: 1,
    name: 'Iron Man',
    birth: 1971,
    isAvenger: true

}

for (let key in hero) {
    //display the key and value
    console.log(`Key: ${key} - Value: ${hero[key]}`);
}