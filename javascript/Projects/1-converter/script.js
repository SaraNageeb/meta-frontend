// We need to capture the 3 inputs. Create three separate variables for that.
const celciusInput = document.getElementById('celcius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// We need to loop through all the inputs. For that, we have to get them as an HTMLCollection. Create a variable to access all the inputs.
const inputs = document.getElementsByClassName('input');
console.log(inputs);

// Now we will loop through each input of the inputs one by one and add an event listener to each input.
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);


        // Now we will use a switch statement for each type of inputs and convert the temperature respectively.
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });

}