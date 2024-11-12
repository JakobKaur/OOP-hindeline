// classes/School.js
const Student = require('./Student');
const Course = require('./Course');

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
        this.nextId = 1;
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    addStudent(student) {
        if (student.age() >= 5 && student.age() <= 18 && !this.students.includes(student)) {
            student.setId(this.nextId++);
            this.students.push(student);
        }
    }

    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        }
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;
