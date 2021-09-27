function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    const otherNumbers = array.filter((num, index) => index !== i);
    
    for (let j = 0; j < otherNumbers.length; j++) {
      const pairedNumber = otherNumbers[j];
      console.log(`Testing ${currentNum} + ${pairedNumber}`);
      if (currentNum + pairedNumber === target) return true
    }

  }

  return false;

}

/* 
  Write the Big O time complexity of your function here
  Quadratic

*/

/* 
  Add your pseudocode here
  Take an array such as [1, 2, 3, 4, 5] and a target value of 9, do any pairs of numbers in the array add up to 9?



  iterate over each number in the array
    current number = 1
    iterate over other numbers in array
      another number = (skip 1) 2 then 3 then 4 then 5
      does current number + another number = target value?
        return true
  
  return false

*/

/*
  Add written explanation of your solution here
  Given a set of numbers and a target sum, do any pairs of numbers total to the target sum? Return true if a pair exists, return false if not.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 2, 3, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
