function isPalindrome(word) {
  // Write your algorithm here
  var reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here
   function isPalindrome(word):
reversed = reverseWord(word)
return word equals reversed
*/

/*
  Add written explanation of your solution here
  the 'isPalindrome' function checks whether a given word is palindrome, which means it reads the same
 forwards and backwards.
 the function I wrote creates a reversed version of the input word by splitting the word
 into individual characters and reversing their order.
 the reversed word is then compared to the original word.
 if the reversed word is equal to the word, it means it is a palindrome.
 if it not equal, then it isn't a palindrome. the function returns true to indicate it is a palindrome.
 and if it isn't a palindrome, the function returns false to indicate it isn't a palindrome. 
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
