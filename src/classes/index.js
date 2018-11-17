import { Person } from './Person';
import { Teacher } from './Teacher';

const person = new Person('f', 'q')
console.log(person.getFullName())
const teacher = new Teacher('Fadi', 'Quader');
teacher.addCourse('React Native')
console.log(teacher.getCourses())
