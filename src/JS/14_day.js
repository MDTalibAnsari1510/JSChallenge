// Day 14: Classes

// ACTIVITY - 1 Class Defiition
// Task:1 Define a class Person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetingMessage() {
        return `Hi ${this.name}, \nGood Evening, \nNow your age is ${this.age}`;
    }
    updateAge(age) {
        this.age = age;
    }
    static genericGreetingMessage(name) {
        return `Hi ${name}, \nGood Evening, \nHow are you`;
    }
    get getFullName() {
        return this.name
    }
    set setName(name) {
        this.name = name;
    }
}

const personObj = new Person("MD Talib", 24);
console.log(personObj.greetingMessage());

// Task:2 Add a method to the Person class that update the age property and log the updated age.
personObj.updateAge(30);
console.log(personObj.greetingMessage());


// ACTIVITY - 2 Class Inheritance
// Task:3 Define a class Student that extends the Person class. add a property studentId and method to return the student ID. Create an intance of the student class and log the student ID.
class Student extends Person {
    studenId;
    static totalStudents = 0;
    constructor(name, age, id) {
        super(name, age);
        this.studenId = id;
        Student.totalStudents += 1;
    }

    getStudentId() {
        return this.studenId;
    }

    greetingMessage() {
        return `Hi ${this.name}, \nGood Evening, \nNow your age is ${this.age},\nAnd your studentID is ${this.studenId}`;
    }
}

const studentObj = new Student('Ramu', 20, `S98`);
console.log(`Student ID is: ${studentObj.getStudentId()}`);

// Task:4 Override the greeting method in the student class to include the student ID and a method return the override greeting message.
console.log(studentObj.greetingMessage());


// ACTIVITY - 3 Static Methods and Properties
// Task:5 Add static method to person class that return a generic greeting message. Call this static method without creating an instance of the class log the message. 
console.log(Person.genericGreetingMessage('Talib'));

// Task:6 Add static property to the Student class to keep track of the number of students created. inccrement this property in the constructor and log the total number of students.
console.log(`Total Number of students: ${Student.totalStudents}`);


// ACTIVITY - 4 Getters and Setters
// Task:7 Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
console.log(personObj.getFullName);

// Task:8 Add a setter method to the Person class to update the name properties (name). Update the name using the setter and log the updated name.
personObj.setName = 'Raju';
console.log(personObj.getFullName);


// ACTIVITY - 4 Private fields (Optinal)
// Task:9 Define a class Account eith private fields for balance and a method to desposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    constructor(initialAmount) {
        let _balance = initialAmount;

        this.deposit = function (amount) {
            if (amount > 0) {
                _balance += amount;
                console.log(`Deposited ${amount} into the account. New balance: ${_balance}`);
            } else {
                console.error('Deposit amount must be greater than zero.');
            }
        };

        this.withdraw = function (amount) {
            if (amount > 0 && amount <= _balance) {
                _balance -= amount;
                console.log(`Withdrawn ${amount} from the account. New balance: ${_balance}`);
            } else if (amount > _balance) {
                console.error('Insufficient funds.');
            } else {
                console.error('Withdraw amount must be greater than zero.');
            }
        };

        this.getBalance = function () {
            return _balance;
        };
    }
}

const accountObj = new Account(1000);
accountObj.deposit(200);
accountObj.withdraw(500);

// Task:10 Create an intance of the account class and test the deposit and withdraw methods, logging the balance after each operation.
accountObj.deposit(200);
accountObj.deposit(1000);
accountObj.withdraw(800);
