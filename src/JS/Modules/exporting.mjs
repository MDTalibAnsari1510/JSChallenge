function sum(num1, num2) {
    return num1 + num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}

function multiplecation(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

export {
    sum, substraction, multiplecation, division
}

export const person = {
    firstName: "MD Talib",
    lastName: "Ansari",
    age: "24",
    fullNameAndAge: function () {
        return `Person Full Name is: ${this.firstName} ${this.lastName} and his age is: ${this.age}`;
    }
}