const numbers = [10, 22, 12, 3443, 34, 334, 555, 6];
const small = [1, 2, 3, 4, 5, 6];
const large = [4444, 55555, 66666, 7777777, 888888888];
const allNumbers = [...numbers, ...large, ...small];
const max = Math.max(...allNumbers);
console.log(allNumbers);
console.log(max);