class Parents {
    constructor(fName, mName) {
        this.fName = fName;
        this.mName = mName;
    }

    addNum(a, b) { return a + b; };
}

class Child extends Parents {
    constructor(name) {
        super('A.H.M Kamruzzaman', 'Mrs. Dilara Zaman');
        this.name = name;
    }
}

const child1 = new Child('Himel');
const child2 = new Child('Huzaifa');
const p = new Parents('Hasan', 'dilara');
console.log(child1);
console.log(p.addNum(22, 32));
