const twoSum = require('./solutions/two_sums');
const maxProfit = require('./solutions/max_profit');
const validParentheses = require('./solutions/valid_parentheses');
const { mergeTwoLists } = require('./solutions/merge_two_lists');
const isPalindrome = require('./solutions/is_palindrome');
const isAnagram = require('./solutions/valid_anagram');
const search = require('./solutions/binary_search');
const floodFill = require('./solutions/flood_fill');
const canConstruct = require('./solutions/ransom_note');
const climbStairs = require('./solutions/climbing_stairs');
const longestPalindrome = require('./solutions/longest_palindrome');
const majorityElement = require('./solutions/majority_element');
const addBinary = require('./solutions/add_binary');
const {TreeNode, diameterOfBinaryTree} = require('./solutions/diameter_of_binary_tree');
var containsDuplicate = require('./solutions/contains_duplicate');
var maxSubArray = require('./solutions/maximum_subarray');
var insert = require('./solutions/insert_interval');

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

// var ransomNote = "aac"
// var magazine = "acaa";
// console.log(canConstruct(ransomNote, magazine));

// console.log(climbStairs(5));

// console.log(longestPalindrome('abccccdd'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('abcdadcb'));

// console.log(majorityElement([3,2,3]));
// console.log(majorityElement([2,2,1,1,2,2,1]));

// console.log(addBinary('11', '1'));
// console.log(addBinary('1010', '1011'));
// console.log(addBinary('0', '0'));


// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right = new TreeNode(3);

// console.log(diameterOfBinaryTree(root));

// root = new TreeNode(1);
// root.left = new TreeNode(2);
// console.log(diameterOfBinaryTree(root));

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5,4,-1,7,8]));
// console.log(maxSubArray([-1]));

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));