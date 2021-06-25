// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);


// =======================
// FUNCTION SCOPE EXAMPLE
// =======================

/*
bird is scoped to birdWatch function
So it only exists inside that function
*/

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird); // Great Blue Heron
}
console.log(bird);//Scarlet Macaw
birdWatch();

