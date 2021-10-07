# How to convert a string to a number in JavaScript
JavaScript provides various ways to convert a string value into a number.

***

### Number() 
The most relevant way to convert a string to number is by using Number() method. 
It takes care of the interger as well as decimal or floating numbers.

```js
Number("25");   //25
Number("2500"); //2500
Number("25.24"); //25.24
Number("24,000"); //NaN
```

However it does not converts strings with separators like Number("24,000") as you can see it returns NaN. 

If you want to convert string with separators then use Intl.NumberFormat().

***

### parseInt() 
Tries to get a number from a string that does not only contain a number.
But if the string does not start with a number, you’ll get NaN (Not a Number):

```js
parseInt('10 lions', 10) //10
parseInt("I'm 10", 10) //NaN
```

Also, just like Number it’s not reliable with separators between the digits:

```js    
parseInt('10.00', 10) //10     
parseInt('10.000', 10) //10     
parseInt('10.20', 10) //10     
parseInt('10.81', 10) //10     
parseInt('10000', 10) //10000
```

***

###  parseFloat()
parseFloat() function converts a string to the floating point number.

```js 
parseFloat('25.24'); //25.24
parseFloat('25'); //25
```

Just like parseInt() it will also convert the fist matching number only. 
It will return NaN for the strings starting with other than numbers.

```js
parseFloat(3.14);     //3.14
parseFloat('3.14');   //3.14
parseFloat('314e-2'); //3.14
parseFloat('0.0314E+2');  //3.14
parseFloat('3.14more non-digit characters'); //3.14
parseFloat('31,400');  //31
parseFloat('Age is 25'); //NaN
```

***

### ```+```
One “trick” is to use the unary operator + before the string:

```js
+'25';     //25
+'25.24';  //25.24
+'25,000'; //NaN
+'25abc';  //NaN
+'abc25';  //NaN
```

***

### Multiplying the string by 1 using ```* 1```

Just like +, we can also multiply the string with 1 using * 1 to convert the string to a number.

```js
'25' * 1;     //25
'25.24' * 1;  //25.24
'25,000' * 1; //NaN
'25abc' * 1;  //NaN
'abc25' * 1;  //NaN
```
It is one of the fastest method to available for the quick conversion.

***
