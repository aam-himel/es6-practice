const person = {
    name: 'himel',
    age: 20,
    phone: 01704939792,
    info: {
        country: 'Bangladesh',
        city: 'Magura',
    }
}

const { name, age } = person;
const { country, city } = person.info;
console.log(name, age);
console.log(country, city);


// array destructuring
const arr = ['Fariya', 'Hamim', 'Inteser', 'Abdullah', 'Al-Hady', 'Al-Amin', 'Hasib', 'Asad', 'Anik',];
const [first, second, third, ...others] = arr;
console.log(first, second, third, others);
