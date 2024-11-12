// classes/Person.js
class Person {
    constructor(name) {
        this.name = name;
        this.birthYear = null;
    }

    setDateOfBirth(year) {
        this.birthYear = year;
    }

    getDateOfBirth() {
        return this.birthYear;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return this.birthYear ? currentYear - this.birthYear : null;
    }

    getName() {
        return this.name;
    }

    description() {
        return `Person: ${this.name}`;
    }
}

module.exports = Person;
