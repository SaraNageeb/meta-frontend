// 1: Using forEach, add together all the elements in the numbers array, and store the total in the variable total.

const numbers = [1, 2, 3, 4, 5];
let total = 0;

// Write loop here:
numbers.forEach(number => total += number);

// 2: Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below
days.forEach(day => dayAbbreviations.push(day.slice(0,2)));
