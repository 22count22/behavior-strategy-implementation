// comparing arrays with === is based on reference
// comparisons are true when they reference the same array in memory
// psst. JS Tutor will help a lot with this example

// this comparison is false!
const huh = [1, 2, 3] === [1, 2, 3];
console.assert('huh:', typeof huh, huh);

// a more involved example:

const array1 = ['hi', 'bye'];
const alsoArray1 = array1;


console.log('same array in memory');
const compareA = alsoArray1 === array1;
console.assert(compareA, 'alsoArray1 === array1');

// using either variable updates the same array
array1.push('chair');
alsoArray1.push('table');


console.log('different arrays in memory');
const array2 = ['hi', 'bye'];

// this comparison fails even though they have the same values
const compareB = array1 !== array2;
const compareC = alsoArray1 !== array2;
console.assert(compareB, 'array1 !== array2');
console.assert(compareC, 'alsoArray1 !== array2');


// updating the second array does not effect the first
array2.push('sofa');