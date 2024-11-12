// index.js
const Person = require('./classes/Person');
const Student = require('./classes/Student');
const Course = require('./classes/Course');
const School = require('./classes/School');

const school = new School("Awesome School");

const student1 = new Student("John Smith");
student1.setDateOfBirth(1995);
const student2 = new Student("Mary Lee");
student2.setDateOfBirth(2000);

school.addStudent(student1);
school.addStudent(student2);

console.log(school.getStudents().length);  // 2

const course1 = new Course("Math");
const course2 = new Course("Physics");

school.addCourse(course1);
school.addCourse(course2);

console.log(school.getCourses().length); // 2

school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);
school.addStudentGrade(student2, course1, 5);

console.log(student1.getGrades());
console.log(course1.getGrades());

console.log("Students ordered by average grade:");
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.getName(), student.getAverageGrade());
});

console.log("Course average grades:");
school.getCourses().forEach((course) => {
    console.log(course.description(), course.getAverageGrade());
});
