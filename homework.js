// -------------------------- Home work - 4--------------------------
// -------------------------- Попов Евгений --------------------------

// Task 4
/**
 * @task Create a multiply function that will take any number
 *  of numbers and return their product:
 *  multiplication (1,2,3) = 6 (1 * 2 * 3)
 * @returns {Number} result - product of numbers
 */
function multiply () {
    let result = 1;
    if (arguments.length === 0) {
        return 0;
    }

    for (let i = 0, max = arguments.length; i < max; i++) {
        result *= arguments[i];
    }

    return result;
}

/**
 * @task Create a function that takes a string and returns a reverse string
 * @param {String} testString
 * @returns {String} result - reverse string
 */
function reverseString (testString = 'test') {
    let splitString = testString.split("");
    let reverseArray = splitString.reverse(); 
    let result = reverseArray.join("");
    return result;
}

/**
 * @task Create a function that takes a string 
 * of letters as an argument and returns a string where 
 * each character is separated by a space and replaced with 
 * the unicode value of the character:
 * getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
 * @param {String} testString
 * @returns {String} result - string where each character is separated by a space and replaced with 
 * the unicode value of the character
 */
function getCodeStringFromText (testString = 'hello') {
    if (testString.length === 0) {
        return "Error. Empty string parameter.";
    }

    let result = '';
    for (let i = 0, max = testString.length; i < max; i++) {
        if (i !== max - 1) {
            result += testString.charCodeAt(i) + ' ';
        } else {
            result += testString.charCodeAt(i);
        }
    }

    return result;
}

/**
 * @task Create a function guess the number.
 * It takes a number from 1-10 (be sure to check 
 * that the number is not more than 10 and not less than 0). 
 * Generates a random number from 1-10 and compares with the 
 * transmitted number if they match then returns “You won” if
 * not then “You did not guess your number 8 but the number 
 * 5 fell out”. The numbers in the string are listed as an example.
 * You substitute real numbers.
 * @param {Number} numParam - guess number
 * @returns {String}
 */
function guessNumber (numParam) {
    if (numParam <= 0 || numParam > 10 || typeof numParam !== 'number') {
        return 'Wrong guess number. Number should be number and from 1 to 10.';
    }
    let checkNumber = parseInt(Math.random() * 10) + 1;

    if (numParam === checkNumber) {
        return 'You won';
    } else {
        return `You did not guess your number ${numParam} and the number  ${checkNumber} fell out`;
    }
}

/**
 * @task Create a function that takes the number n and 
 * returns an array filled with numbers from 1 to n:
 *  getArray (10); // [1,2,3,4,5,6,7,8,9,10]
 * @param {Number} nmbr - number of array values
 * @returns {Array} result - array from 1 to n [1,2, ..., n]
 */
function createArrayByNumber (nmbr = 10) {
    if (nmbr < 1 || typeof nmbr !== 'number') {
        return 'Error. Wrong parameter number. Should be number and > 0';
    }
    let result = [];
    for (let i = 1; i <= nmbr; i++) {
        result.push(i);
    }

    return result;
}

/**
 * @task Create a function that accepts an array, and returns a new array with duplicated elements of the input array:
 * doubleArray ([1,2,3]) // [1,2,3,1,2,3]
 * @param {Array} inputArr - input array 
 * @returns {Array}
 */
function doubleArray(inputArr) {
    let str = inputArr.join(' ');
    str += ' ' + str;
    let result = str.split(' ');
    return result;
}

/**
 * @task Create a function that takes an arbitrary (any) number of arrays and
 * removes the first element from each array, and returns an array of 
 * the remaining values:
 * changeCollection ([1,2,3], ['a', 'b', 'c']) → [[2,3], ['b', 'c']], 
 * changeCollection ([1,2, 3]) → [[2,3]], etc.
 * @return {Array}
 */
function changeCollection () {
    if (arguments.length === 0) {
        return 'Error. No parameters entered.';
    }
    let result = [];
    for (let i = 0, max = arguments.length; i < max; i++) {
        result.push(arguments[i].slice(1));
    }
    return result;
}

let users = [
    {
        name  : 'Ivan',
        age   : 28,
        gender: 'male'
    },
    {
        name  : 'Petr',
        age   : 29,
        gender: 'male'
    },
    {
        name  : 'Adelina',
        age   : 30,
        gender: 'female'
    },
    {
        name  : 'Patricia',
        age   : 25,
        gender: 'female'
    }
 ];

/**
 * @task Create a function that accepts an array of users,
 * the field for which I want to check and the value for which 
 * I want to check. Check that all arguments are passed.
 * Return a new array with users corresponding to the 
 * specified parameters.
 * @param {Array} usersArr - array of user objects
 * @param {String} parameter - parameter of user objects to check
 * @param {String} value - value of user objects to check
 * @returns {Array} result - array
 */
function getUsersByParameters (usersArr, parameter, value) {
    if (usersArr.length === 0 || !parameter || !value) {
        return 'Error. Not all parameters were set';
    }
    let result = [];
    for (let i = 0, max = usersArr.length; i < max; i++) {
        if (usersArr[i][parameter] === value) {
            result.push(usersArr[i]);
        }
    }

    return result;
}


// Task 5
/**
 * @description function getNewString() - remove spaces in string and 
 * start each word from uppercase letter
 * @param {Array} inputArr 
 * @returns {String} return new string
 */
function getNewString(inputArr) {
    let resArr = [];
    for (let i = 0, max = inputArr.length; i < max; i++) {
        resArr.push(inputArr[i][0].toUpperCase() + inputArr[i].substr(1));
    }
    return resArr.join('');
}

/**
 * @description function getNewStringFromArray() - create new string from array values, each value * 10
 * @param {Array} inputArr 
 * @returns {String} return new string
 */
function getNewStringFromArray(inputArr) {
    let result = [];
    for (let i = 0, max = inputArr.length; i < max; i++) {
        result.push(inputArr[i] * 10);
    }
    return result.join(', ');
}

/**
 * @description function getNewStringFromArray() - create new string from array of objects,
 * where each object have structure {name: nameValue, age: ageValue}
 * @param {Array} inputArr 
 * @returns {String} return new string
 */
function getNewStringFromObject(inputObj) {
    let result = [];
    for (let o of inputObj) {
        result.push(`${o.name} is ${o.age}`);
    }
    return result.join(', ');
}

/**
 * @description function getReverseArray() - create new string from array,
 * convert each value to its reverse value.
 * To process data this function uses reverseString() function
 * @param {Array} inputArr 
 * @returns {String} return new string
 */
function getReverseArray(inputArray) {
    let result = [];
    for (let i = 0, max = inputArray.length; i < max; i++) {
        result.push(reverseString(inputArray[i]));
    }
    return result.join(', ');
}

/**
 * @description function processData() - process data from the input array using special functions,
 * @param {Array} inputArr - input array. Can use next models:
 *  - [{string1}, {string2}, {string3}, {string4}, ...]
 *  - [{number1}, {number2}, {number3}, ...]
 *  - [{age: ageValue1, name: namevalue1}, {age: ageValue2, name: namevalue2}, ...]
 * @param {Function} func - function which proccess input data
 * @returns {String} return new string
 */
function processData (inputArr, func = funcName) {
    return 'New value: ' + func(inputArr);
}

let stringArray = ['my', 'name', 'is', 'Trinity'];
let numberArray = [10, 20, 30];
let objectArray = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let arrayToReverse = ['abc', '123'];

console.log(processData(stringArray, getNewString));
console.log(processData(numberArray, getNewStringFromArray));
console.log(processData(objectArray, getNewStringFromObject));
console.log(processData(arrayToReverse, getReverseArray));



/**
 * @task Write an analogue of the every method.
 * Create the function every, it must take an array of numbers as the first argument
 * (be sure to check that the array is passed) with the second argument callback
 * the function must return true or false depending on the result of the callback
 * call (check a number greater than 5).
 *  A callback must accept one element of the array, its index in the array, and the entire array.
 * @param {Array} arr  - input array
 * @param {Function} callback  - function to process data from array
 */
function myEvery (arr, callback) {
    if (!Array.isArray(arr)) {
        return 'Error! First argument not array.';
    }

    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

let arrNumbers = [10, 12, 13, 4, 9, 56, 0, 77];
myEvery(arrNumbers, function (number, index, arr2) {
    return number > 5;
});

//-------------
let checkArrNumbers = [1,2,3,5,8,9,10];
let newEveryResult = [];
checkArrNumbers.forEach (function (number, index, array) {
    let res = {};
    res.digit = number;
    if (!(number % 2)) {
        res.odd = true;
    } else {
        res.odd = false;
    }
    newEveryResult.push(res);
});

//-------------

let zeroArray = [12, 4, 50, 1, 0, 18, 40];
let r2 = zeroArray.every(function (number, index, array) {
    return number !== 0;
});


let wordsArray = ['yes', 'hello', 'no', 'easycode', 'what'];
let r3 = wordsArray.some(function (value, index, array) {
    return value.length > 3;
});

//-------------

let wordsArray2 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];



function compareNumeric(a, b) {
    if (a.index > b.index) return 1;
    if (a.index < b.index) return -1;
}

function getStringFromArray2 (inputArray) {
    let sortArr = inputArray.sort(compareNumeric);
    let newStr2 = '';
    for (let i= 0, max = sortArr.length; i < max; i++) {
        newStr2 += sortArr[i].char;
    }
    return newStr2;
}

//-------------

let checkArr3 =  [[14, 45], [1], ['a', 'c', 'd']];
function compareNumeric2(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
}

let sortCheckArr3 = checkArr3.sort(compareNumeric2);

//-------------

let checkArr4 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

function compareNumeric3(a, b) {
    if (a.info.cores > b.info.cores) return 1;
    if (a.info.cores < b.info.cores) return -1;
}

let sortCheckArr4 = checkArr4.sort(compareNumeric3);

//----------

let products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function compareNumeric4(a, b) {
    if (a['price'] > b['price']) return 1;
    if (a['price'] < b['price']) return -1;
}

function filterCollection (productsArr, min, max) {
    let resArr = [];
    for (let i = 0, max2 = productsArr.length; i < max2; i++) {
        console.log(productsArr[i]['price']);
        if (productsArr[i]['price'] >= min && productsArr[i]['price'] <= max) {
            resArr.push(productsArr[i]);
        }
    }

    return resArr.sort(compareNumeric4);
}