//It's time to practice returning values from a function! Write a simple function multiply 
//which accepts two numerical arguments and returns their product (multiply them together)
//Make sure to return the value instead of printing it!

// DEFINE YOUR FUNCTION BELOW:
function multiply(x, y) {
    return x * y; 
}

multiply(2,3);

//isShorts Weather Function often struggle to know whether should wear shorts or pants on a given day. 
//(this is a complete lie, it's really not that hard to decide) Please help me decide by writing me a function called isshortsither • It should accept a single number argument, which we will call temperature (but you can name it whatever you want, of course). • If temperature is greater than or equal to 75, return true. • 
//Otherwise, return false.


// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >=75) {
        return true
    } else {
        return false
    }
    
}