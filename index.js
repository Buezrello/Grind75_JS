const twoSum = require('./solutions/two_sums');
const maxProfit = require('./solutions/max_profit');
const validParentheses = require('./solutions/valid_parentheses');
const { mergeTwoLists } = require('./solutions/merge_two_lists');
const isPalindrome = require('./solutions/is_palindrome');
const isAnagram = require('./solutions/valid_anagram');
const search = require('./solutions/binary_search');
const floodFill = require('./solutions/flood_fill');
const canConstruct = require('./solutions/ransom_note');

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));

// console.log(validParentheses('()'));
// console.log(validParentheses('()[]{}'));
// console.log(validParentheses('(]'));
// console.log(validParentheses('(){}}{'));
// console.log(validParentheses('(])'));

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));
// console.log(isPalindrome('.,'));

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'cat'));

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
// console.log(search([-1, 0, 3, 5, 9, 12], 2));

// image1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
// image2 = [[0, 0, 0], [0, 0, 0]];
// console.log(floodFill(image1, 1, 1, 2));
// console.log(floodFill(image2, 0, 0, 0));

var ransomNote = "aac"
var magazine = "acaa";
console.log(canConstruct(ransomNote, magazine));
