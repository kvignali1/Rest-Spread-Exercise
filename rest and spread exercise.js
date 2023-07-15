// function filterOutOdds() {
// 	var nums = Array.prototype.slice.call(arguments);
// 	return nums.filter(function (num) {
// 		return num % 2 === 0;
// 	});
// }

const filterOutOdds = (...nums) => {
	args.filter((n) => n % 2 === 0);
};

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...nums) => {
	let result = Math.min(...nums);
	return result;
};

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => {
	const result = { ...obj1, ...obj2 };
	return result;
};

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...gajins) => {
	return [...arr, gajins.map((n) => n * 2)];
};

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
	let randomIdx = Math.floor(Math.random() * 6);
	console.log(randomIdx);
	items.splice(randomIdx, 1);
	return items;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
	const result = [...array1, ...array2];
	return result;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
// *** solution used from springboard ***
function addKeyVal(obj, key, val) {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
	let result = { ...obj };
	delete result[key];
	return result;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
	let result = { ...obj1, ...obj2 };
	return result;
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {}
