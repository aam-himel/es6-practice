// Const Variable

const number = 10;
console.log(number);

// Const Array
const arr = [10, 33, 44, 55];

arr.push(1);
arr.pop();
arr[1] = 'hi';
console.log(arr);
// Const Object
const obj = { name: 'himel', phone: 0192929};
obj.name = 'munna';

console.log(obj);

// Let
for (var i = 0; i <= 10; i++) {
    console.log('i = ', i);
}
i += 10;

console.log(i);

for (let j = 0; j <= 10; j++) {
    console.log('j = ', j);
}