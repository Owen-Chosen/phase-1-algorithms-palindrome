function isPalindrome(word) {
  if (word.split("").reverse().join("") == word) return true;
  else return false;
}

/* 
  -split parameter into an array of letters
  -reverse the resultant array using array.reverse() built-in array method
  -join back the reversed array into a string
  -compare the new word to the parameter passed in
  -return true if same, and return false if not
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
