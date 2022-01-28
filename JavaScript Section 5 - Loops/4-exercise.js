/*
Fizz Buzz is a very simple programming task, asked in software developer job interviews.

A typical round of Fizz Buzz can be: 
Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”. 
*/

function fizzBuzz (num) {
  if (typeof num !== 'number') return num;

  if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz';
  
  if (num % 3 == 0) return 'Fizz';
  
  if (num % 5 == 0) return 'Buzz';
  
  return num;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}
