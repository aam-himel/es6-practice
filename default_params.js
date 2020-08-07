// Default params
// old style
function add(num1, num2) {
    num2 = num2 || 10;
    return num1 + num2;
}

const res = add(20);
console.log(res);

// ES6 style

function add1(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}

const res1 = add1(5, 6);
console.log(res1);


const res2 = add1(5, 6, 5);
console.log(res2);