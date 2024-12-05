//  Reverse a String: Write a function that reverses a given string.
function reversedString(string){
    result = string.split('').reverse().join('');
    return result;
}

console.log(reversedString("Hello world"));

// Count Characters: Create a function that counts the number of characters in a string.

function characterNos(character) {
    result = character.length;
    return result;
}

console.log(characterNos("How have you been all this while?"));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeLetters(strings){
    result = strings.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return result;
};

console.log(capitalizeLetters("how have you been all this while?"));


// Write functions to find the maximum and minimum values in an array of numbers.
function maxMin(arr) {
    if(arr.length === 0){
        return "Array is empty";
    }

    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        } else if (arr[i]<min){
            min = arr[i];
        }
    }
    return `Maximum: ${max}, Minimum: ${min}`;
}


// Create a function that calculates the sum of all elements in an array.

function sumArray (numArr) {
    var sum = 0;
    for(i = 0; i < numArr.length; ++i){
        sum += numArr[i];
    }
    return sum;
}


//  Implement a function that filters out elements from an array based on a given condition.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumber = array.filter(number => number % 2 === 0);

console.log (evenNumber)



// Write a function to calculate the factorial of a given number.

function factorial(num){
    let total = 1;
    for(i = 1; i <= num; ++i){
        total = total * i;
    }
    return total;
}

console.log(factorial(5));


//  Create a function to check if a number is prime or not.

function prime(nums) {
    if(nums < 2){
        return false;
    }
    if(nums === 2) {
        return true;
    }
    for(let i = 2; i <= Math.sqrt(nums); i++){
        if(nums % i === 0){
            return false;
        }
    }
    return true;
}


//  Implement a function to generate the Fibonacci sequence up to a given number of terms.

function fibonacci(n){
    let sequence = [0, 1];
    while(sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

console.log(fibonacci(10))