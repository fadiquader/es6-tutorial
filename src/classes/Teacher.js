import { Person } from './Person';

export class Teacher extends Person {
  courses = [];
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  getCourses() {
    return this.courses;
  }
  addCourse(course) {
    this.courses.push(course)
  }
}