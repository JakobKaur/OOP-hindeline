// classes/Student.js
const Person = require('./Person');

class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grades = [];
    }

    setId(id) {
        if (this.id === null) this.id = id;
    }

    getId() {
        return this.id;
    }

    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        const total = this.grades.reduce((sum, entry) => sum + entry.grade, 0);
        return total / this.grades.length;
    }

    description() {
        return `Student: ${this.name}`;
    }
}

module.exports = Student;
