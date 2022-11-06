//SPLIT

var str='In space, no one can hear you code.';
console.log(str.split());
//print ['In space, no one can hear you code.']
console.log(str.split('e'));
//print ['In spac', ', no on', ' can h', 'ar you cod', '.']
console.log(str.split(' '));
//print ['In', 'space,', 'no', 'one', 'can', 'hear', 'you', 'code.']
console.log(str.split(''));
//print  ['I', 'n', ' ', 's', 'p', 'a', 'c', 'e', ',', ' ', 'n', 'o', ' ', 'o', 'n', 'e', ' ', 'c', 'a', 'n', ' ', 'h', 'e', 'a', 'r', ' ', 'y', 'o', 'u', ' ', 'c', 'o', 'd', 'e', '.']
var arr=['B','n','n',5];
console.log(arr.join());
//print B,n,n,5
console.log(arr.join('a'));
//print Banana5
console.log(arr.join(''));
//print Bnn5
console.log(arr.join(' '));
print B n n 5
// No, split and join does not change the original array