# How To Convert Data Types in JavaScript
In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

***

### Converting Values to Strings
Values can be explicitly converted to strings by calling either String() or n.toString().

With the String() function, let’s convert a Boolean value to a string by passing the value true into the parameters for String().

String(true);
When we do this, the string literal "true" will be returned.

Output
"true"
Alternatively, we can pass a number into the function.

String(49);
A string literal of that number will be returned.

Output
"49"
Let’s use the String() function with a variable. We’ll assign a number value to the variable odyssey and then use the typeof operator to check for type.

let odyssey = 2001;
console.log(typeof odyssey);
Output
number
At this point, the variable odyssey is assigned the numerical value of 2001, which we have confirmed to be a number.

Now, let’s reassign odyssey to its string equivalent and then use typeof to confirm that we have successfully converted the variable’s value from a number to a string.

odyssey = String(odyssey);	// "2001"
console.log(typeof odyssey);
Output
string
In the example above, we have confirmed that odyssey was reassigned to be equivalent to a string value following the data type conversion.

We can use n.toString() in a similar way. We can replace n with a variable:

let blows = 400;
blows.toString();
The variable blows will be returned as a string.

Output
"400"
Alternatively, we can put a value within parentheses rather than a variable with n.toString():

(1776).toString();			// returns "1776"
(false).toString();			// returns "false"
(100 + 200).toString();		// returns "300"
By using String() or n.toString() we are able to explicitly convert values of Boolean or number data types to string values in order to ensure that our code behaves as we anticipate.

***

### Converting Values to Numbers
When converting values to a number data type, we’ll use the Number()method. Primarily, we’ll be converting strings of numerical text to numbers, but we can also convert Boolean values.

We can pass a string of a number to the Number() method:

Number("1984");
The string will be converted to a number and no longer be enclosed within quotation marks.

Output
1984
We can also assign a string to a variable and then convert it.

let dalmatians = "101";
Number(dalmatians);
Output
101
The string literal "101" was converted to the number 101 via its variable.

Strings of white spaces or empty strings will convert to 0.

Number(" ");	// returns 0
Number("");		// returns 0
Be aware that strings of non-numbers will convert to NaN which stands for Not a Number. This includes numbers separated by spaces.

Number("twelve");	// returns NaN
Number("20,000");	// returns NaN
Number("2 3");		// returns NaN
Number("11-11-11");	// returns NaN
For Boolean data types, false will evaluate to 0 and true will evaluate to 1.

Number(false);		// returns 0
Number(true);		// returns 1
The Number() method converts non-number data types to numbers.

***

### Converting Values to Booleans
To convert numbers or strings to Boolean values, the Boolean() method is used. This can be useful for determining whether a user entered data into a text field or not, for example.

Any value that is interpreted as empty, like the number 0, an empty string, or values that are undefined or NaN or null are converted to false.

Boolean(0);			// returns false
Boolean("");		// returns false
Boolean(undefined);	// returns false
Boolean(NaN);		// returns false
Boolean(null);		// returns false
Other values will be converted to true, including string literals composed of white space.

Boolean(2000);		// returns true
Boolean(" ");		// returns true
Boolean("Maniacs");	// returns true
Note that "0" as a string literal will convert to true since it is a non-empty string value:

Boolean("0");	// returns true
Converting numbers and strings to Boolean values can allow us to evaluate data within binary terms and can be leveraged for control flow in our programs.

***