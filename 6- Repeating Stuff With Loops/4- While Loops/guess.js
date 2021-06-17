// ======================================
// MORE EXAMPLES OF FOR WHILE LOOPS!
// ======================================

const secretWord = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== secretWord) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")