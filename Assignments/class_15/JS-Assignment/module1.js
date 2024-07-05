//create an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Function to perform

function filterArray(arr) {
    return arr.filter((num) => num % 2 === 0);
}

//export module1 array and function 

module.exports = { arr, filterArray };
