function obj(n, s) {
    return {
        name: n,
        surname: s
    }
}

let student = obj('Peter', 'Parker');
console.log(student);

// Using new 
function obj1(n, s) {
    this.name = n
    this.surname = s
}

let student1 = new obj1('Jason', 'Todd');
console.log(student1);

