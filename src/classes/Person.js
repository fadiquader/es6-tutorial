
export class Person {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  setFirstName(firstName) {
    this.firstName = firstName
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
}
