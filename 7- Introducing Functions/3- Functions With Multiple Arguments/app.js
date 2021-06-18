function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// define isSnakeEyes below:
function isSnakeEyes(dice1, dice2) {
    if(dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
snakeEyes();


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}






// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

