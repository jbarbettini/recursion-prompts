// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	if (n === 0) {
		return 1;
	} else if (n < 0) {
		return null
	} else {
		return n * factorial(n - 1);
	}
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	if (array.length === 0) {
  		return 0;
	} 
	return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
// Another example: arraySum(2, 4, [2, 2, 0], [[1, 2], 3], 4); // ?
var arraySum = function(array) {
	var current;
	if (array.length === 0) {
  		return 0;
	}
	if (Array.isArray(array[0])) {
		current = arraySum(array[0]);
	} else {
		current = array[0];
	}
	return current + arraySum(array.slice(1));
};

// arraySum works:
/*
normal -> array[0] = 1, array.slice = [[2,3],[[4]],5]]
subarray -> array[0] = [2, 3], array.slice [[[4]], 5]
normal -> array[0] = 2, array.slice = [3]
normal -> array[0] = 3, array.slice = 0
subarray -> array[0] = [[4]], array.slice = [5]
subarray -> array[0] = [4], array.slice = 0
normal -> array[0] = 4, array.slice = [5]
normal -> array[0] = 5, array.slice = 0
*/

// 4. Check if a number is even.
var isEven = function(n) {
	if (n < 0) {
		return isEven(Math.abs(n));
	}
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n - 2);
	} 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 0) {
		return 0;
	} else if (n < 0) {
		return (n + 1) + sumBelow(n + 1);
	} else {
		return (n - 1) + sumBelow(n - 1);
	}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	var result = [];
	if ((x - 1) > y) {
		result.push(x - 1);
		return result.concat(range(x - 1, y));
	}	
	if ((x + 1) < y) {
	  	result.push(x + 1);
		return result.concat(range(x + 1, y));
	}
	if ((x + 1) === y || x === y || x === (y + 1)) {
		return result;
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	}
	if (exp < 0) {
		exp = -exp;
		return 1 / (base * exponent(base, exp - 1));
	}
	return base * exponent(base, exp - 1);

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
	if (string.length === 1) {
		return string;
	} else {
		return reverse(string.slice(1)) + string.charAt(0);
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	/*var reverse = palindrome(string.slice(1)) + string.chatAt(1);
	if (string.length === 1) {
		return string;
	}
	if (reverse === string) {
		return true;
	} else {
		return false;
	}*/
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
	if (x === 0 || y === 0) {
		return 0;
	}
  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    multiply(x, y);
  }
	if (y === 1) {
		return x;
	} else if (y > 1) {
		return x + multiply(x, y - 1);
	} 
  if (y === -1) {
  	return x;
  } else if (y < -1) {
  	return x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
	/*var count = 0;
	if (y === 0) {
		return 1;
	} else if (x < y) {
		return 0;
	} else if (x === 0) {
		return 0;
	}
	if (x === 0 || x < 0) {
		return count;
	} else {
		count++;
		return divide(x - y, y);
	}*/
};


// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	/*if (str1.length !=== str2.length) {
		return false;
	}*/

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
	var array = [];
	if (str.length === 0) {
		return array;
	}
	if (str.length > 0) {
		array[0] = str.slice(0, 1);
		return array.concat(createArray(str.substring(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	}
	if (array.length > 0) {
		newArray.push(array[array.length - 1]);
		return newArray.concat(reverseArr(array.slice(0, array.length - 1)));
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var array = [];
	if (length === 0) {
		return array;
	}
	if (length > 0) {
		array.push(value); 
		return array.concat(buildList(value, length - 1)); 
	}
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var count = 0;
	if (array.length === 0) {
		return count; 
	}
	if (array.length > 0) {
		if (array[0] === value) {
			count++;
			return count += countOccurrence(array.slice(1), value); 
		} else {
			return count += countOccurrence(array.slice(1), value);
		}
	}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	}
	if (array.length > 0) {
		newArray.push(callback(array[0]));
		return newArray.concat(rMap(array.slice(1), callback));
	}

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var element in obj) {
		if (typeof obj[element] === 'object'){
			count += countKeysInObj(obj[element], key);
		}
		if (element === key) {
			count++;
		}
	}
	return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var element in obj) {
		if (typeof obj[element] === 'object'){
			count += countValuesInObj(obj[element], value);
		}
		if (obj[element] === value) {
			count++;
		}
	}
	return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
	for (var element in obj) {
		if (typeof obj[element] === 'object') {
			obj[element] = replaceKeysInObj(obj[element], key, newKey);
		}
		if (element === key) {
			obj[newKey] = obj[element];
			delete obj[element]; 
		}
	}
	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
	var result = [];
	if (n <= 0 ) {
		return null; 
	} else if (n === 1) {
		return [0, 1];
	} else {
		result = fibonacci(n - 1);  
    	result.push(result[result.length - 1] + result[result.length - 2]);  
    	return result;  
	}
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	} else if (n < 2) {
		return n;
	} else {
		return nthFibo(n - 1) + nthFibo(n - 2);
	}
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
	var newArray = [];
	if (input.length === 0) {
		return newArray;
	}
	if (input.length > 0) {
		newArray.push(input[0].toUpperCase());
		return newArray.concat(capitalizeWords(input.slice(1)));
	}
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
	var newArray = [];
	if (array.length === 0) {
		return newArray;
	}
	if (array.length > 0) {
		var firstChar = array[0].charAt(0);
		newArray.push((firstChar.toUpperCase()).concat(array[0].slice(1)));
		return newArray.concat(capitalizeFirst(array.slice(1)));
	}
}


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var result = 0;
	for (var key in obj) {
		if (typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		} else if (obj[key] % 2 === 0) {
			result += obj[key]; 
		}
	}
	return result;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	var result = [];
	for (var i = 0; i < arrays.length; i++) {
		if (Array.isArray(arrays[i])) {
			result = result.concat(flatten(arrays[i]));
		} else {
			result.push(arrays[i]);
		}
	}
	return result; 
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
	if (obj === undefined) {
		obj = {};
	}	
	if (str.length === 0) {
		return obj;
	}
  	if (obj[str[0]]) {
    	obj[str[0]] += 1;
  	} else {
    	obj[str[0]] = 1;
  	}
	return letterTally(str.slice(1), obj);
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	if (str.length === 0) {
		return str;
	}
	if (Number(str[0])) {
		return numbers[Number(str[0])] + numToText(str.slice(1));
	} else {
		return str[0] + numToText(str.slice(1));
	}
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
