// -------------------------- Home work - 4--------------------------
// -------------------------- Попов Евгений --------------------------

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