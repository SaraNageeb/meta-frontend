let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let runnerAge = 19;

// checking if the runner is an adult AND registered early.
if (isRegisteredEarly && runnerAge > 18) {
    raceNumber += 1000;
}

// checking if: runner is over 18 AND registered early
// else if: runner is over 18 AND did not register early they will race at 11:00am
// else if: runner is over 18 
// else: runners exactly 18 years old contact registration desk
if (isRegisteredEarly && runnerAge > 18) {
    console.log(`Your race number ${raceNumber}: will start at 9:30am`);
} else if (!isRegisteredEarly && runnerAge > 18) {
    console.log(`Your race number ${raceNumber}: will start at 11:00am`);
} else if (runnerAge < 18) {
    console.log(`Your race number ${raceNumber}: will start at 12:30am`);
} else
    console.log(`Please contact the the registration desk`);